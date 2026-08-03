import { Link, Navigate, useParams } from 'react-router-dom'
import { getNextProject, getPreviousProject, getProjectById } from '../data/projects'
import Footer from '../components/Footer'
import LazyImage from '../components/LazyImage'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'

const DetailSection = ({ title, children }) => {
  if (!children) return null

  return (
    <section className="section-band project-detail-section">
      <h2 className="section-heading">{title}</h2>
      <div className="project-detail-section__body">{children}</div>
    </section>
  )
}

const ProjectDetails = () => {
  const { projectId } = useParams()
  const project = getProjectById(projectId)
  const nextProject = getNextProject(projectId)
  const prevProject = getPreviousProject(projectId)

  if (!project || project.projectType === 'technical') {
    return <Navigate to="/work" replace />
  }

  const overview = project.detailedDescription || project.description
  const problem = project.problemStatement || project.keyChallenge
  const role = project.role || project.category
  const screenshots = project.screenshots || []
  const features = project.functions || []
  const resources = project.resources || []
  const isPdfLink = typeof project.projectLink === 'string' && project.projectLink.toLowerCase().endsWith('.pdf')

  return (
    <>
      <SEO
        title={project.title}
        description={overview}
        image={project.image}
        url={`https://karthikmanda.netlify.app/work/${project.id}`}
      />
      <div className="page-shell">
        <Navbar />
        <main className="page-main">
          <Link to="/work" className="text-link">
            Back to Work
          </Link>

          <section className="page-hero">
            <h1>{project.title}</h1>
            <p>{project.type || project.category}</p>
          </section>

          {project.image && (
            <div className="surface-card project-detail-hero-image">
              <LazyImage src={project.image} alt={`${project.title} case study image`} priority />
            </div>
          )}

          <DetailSection title="Overview">
            <p>{overview}</p>
          </DetailSection>

          <DetailSection title="Problem">
            <p>{problem || project.description}</p>
          </DetailSection>

          <DetailSection title="Role">
            <p>{role}</p>
          </DetailSection>

          {features.length > 0 && (
            <DetailSection title="Key Decisions">
              <div className="project-detail-list">
                {features.map((feature) => (
                  <article className="surface-card" key={feature.title}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                ))}
              </div>
            </DetailSection>
          )}

          {resources.length > 0 && (
            <DetailSection title="Tools and Inputs">
              <div className="tag-row">
                {resources.map((resource) => (
                  <span className="tag-chip" key={resource}>
                    {resource}
                  </span>
                ))}
              </div>
            </DetailSection>
          )}

          {screenshots.length > 0 && (
            <DetailSection title="Screens">
              <div className="project-detail-grid">
                {screenshots.map((screen) => (
                  <article className="surface-card" key={screen.image}>
                    <LazyImage src={screen.image} alt={`${project.title} ${screen.title}`} />
                    <div>
                      <h3>{screen.title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </DetailSection>
          )}

          <section className="section-band">
            <h2 className="section-heading">Links</h2>
            <div className="work-card__links">
              {project.figmaLink && (
                <a className="text-link" href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                  View Figma Prototype
                </a>
              )}
              {project.projectLink && (
                <a className="text-link" href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  {project.projectLinkLabel || (isPdfLink ? 'View Case Study PDF' : 'View Live Demo')}
                </a>
              )}
            </div>
          </section>

          <nav className="project-detail-nav" aria-label="Project navigation">
            {prevProject ? (
              <Link to={`/work/${prevProject.id}`} className="text-link">
                Previous
              </Link>
            ) : (
              <span />
            )}
            <Link to="/work" className="text-link">
              All Work
            </Link>
            {nextProject ? (
              <Link to={`/work/${nextProject.id}`} className="text-link">
                Next
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ProjectDetails
