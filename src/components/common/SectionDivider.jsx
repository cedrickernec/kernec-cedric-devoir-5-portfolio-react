export default function SectionDivider({title}) {
  return (
    <div className="section-divider mb-4">
      <h3 className="fw-bold">{title}</h3>
      <div className="divider-line bg-primary mt-2"></div>
    </div>
  )
}