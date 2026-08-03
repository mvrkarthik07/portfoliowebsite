import { skillPillars } from '../data/experience'

const SkillsMatrix = () => (
  <div className="skills-matrix">
    {skillPillars.map((pillar) => (
      <section className="surface-card skills-matrix__item" key={pillar.title}>
        <h3>{pillar.title}</h3>
        <div className="skills-matrix__description">{pillar.description}</div>
        <div className="tag-row">
          {pillar.tags.map((tag) => (
            <span className="tag-chip" key={`${pillar.title}-${tag}`}>
              {tag}
            </span>
          ))}
        </div>
      </section>
    ))}
  </div>
)

export default SkillsMatrix
