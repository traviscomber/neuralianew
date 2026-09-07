import styles from './solutions-hero-system.module.css'

const stages = [
  { key: 'data', title: 'Data', lines: ['Capture', 'Connect', 'Unify'] },
  { key: 'workflow', title: 'Workflow', lines: ['Automate', 'Coordinate', 'Orchestrate'] },
  { key: 'intelligence', title: 'Intelligence', lines: ['Analyze', 'Understand', 'Recommend'] },
  { key: 'action', title: 'Action', lines: ['Execute', 'Alert', 'Improve'] },
] as const

export function SolutionsHeroSystem() {
  return (
    <div className={styles.system} aria-hidden="true">
      <div className={styles.ambient} />
      <div className={styles.scanline} />
      <div className={styles.floor} />
      <div className={styles.connector} />

      <div className={styles.stageGrid}>
        {stages.map((stage, index) => (
          <div key={stage.key} className={`${styles.stage} ${styles[stage.key]}`}>
            <div className={styles.meta}>
              <span className={styles.index}>0{index + 1}</span>
              <strong>{stage.title}</strong>
              <div>{stage.lines.map((line) => <span key={line}>{line}</span>)}</div>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelGlow} />
              <div className={styles.verticalGuide} />
              <div className={styles.node} />
              {stage.key === 'data' ? <DataGraphic /> : null}
              {stage.key === 'workflow' ? <WorkflowGraphic /> : null}
              {stage.key === 'intelligence' ? <IntelligenceGraphic /> : null}
              {stage.key === 'action' ? <ActionGraphic /> : null}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.signal}><span /><span /><span /><span /><span /></div>
      <div className={styles.caption}>From data<br />to real impact</div>
    </div>
  )
}

function DataGraphic() {
  return <div className={styles.dataGraphic}>
    {Array.from({ length: 18 }).map((_, index) => <i key={index} style={{ '--i': index } as React.CSSProperties} />)}
  </div>
}

function WorkflowGraphic() {
  return <div className={styles.workflowGraphic}>
    <i /><i /><i /><i /><i /><i />
    <b /><b /><b /><b />
  </div>
}

function IntelligenceGraphic() {
  return <div className={styles.intelligenceGraphic}>
    <span className={styles.waveA} />
    <span className={styles.waveB} />
    <span className={styles.waveC} />
    <span className={styles.terrain} />
  </div>
}

function ActionGraphic() {
  return <div className={styles.actionGraphic}>
    <span className={styles.ring1} />
    <span className={styles.ring2} />
    <span className={styles.ring3} />
    <span className={styles.ring4} />
    <i />
  </div>
}
