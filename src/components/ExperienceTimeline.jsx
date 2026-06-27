import { experience } from '../data/experience'
const getYear = (dateRange) => {
  const match = dateRange.match(/\d{4}/)
  return match ? match[0] : ''
}

const ExperienceTimeline = ({ compact = false }) => (
  <div className="experience-timeline">
    {experience.map((item) => (
      <article
        key={`${item.company}-${item.role}`}
        className="experience-item"
      >
        <div className="experience-item__year">
          <span>{getYear(item.dateRange)}</span>
        </div>
        <div className="surface-card">
          <div className="experience-item__header">
            <div>
              <h3>{item.role}</h3>
              <p className="experience-item__company">
                {item.company} <span>{item.level}</span>
              </p>
            </div>
            <p className="experience-item__date">{item.dateRange}</p>
          </div>
          <ul className={compact ? 'experience-item__bullets compact' : 'experience-item__bullets'}>
            {item.achievements.slice(0, compact ? 2 : 3).map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
          <div className="tag-row">
            {item.tags.map((tag) => (
              <span className="tag-chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
)

export default ExperienceTimeline
