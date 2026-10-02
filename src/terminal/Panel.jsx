export default function Panel({ number, id, mnemonic, title, meta, children, className = '' }) {
  return <section id={id} className={`terminal-panel panel-${number} ${className}`} aria-keyshortcuts={number} aria-labelledby={`${id}-title`}>
    <div className="panel-header"><span className="panel-number">{number}</span><span className="panel-mnemonic">{mnemonic}</span><h2 id={`${id}-title`} tabIndex={-1}>{title}</h2>{meta && <div className="panel-meta">{meta}</div>}</div>
    <div className="panel-body">{children}</div>
  </section>
}
