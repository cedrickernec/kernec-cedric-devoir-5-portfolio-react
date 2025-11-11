export default function SectionDivider({
  level = "h2",
  title,
  paragraph,
  variant = "default"}) {

  const Heading = level;

  const isCentered = variant === "centered";

  const DividerStyle = {
    height: isCentered ? "5px" : "3px",
    width: isCentered ? "30vw" : "100%",
  }

  return (
    <div className={`${isCentered ? "text-center mb-5" : "text-start mb-4"}`}>
      <Heading className="fw-bold">{title}</Heading>

      {paragraph && (
        <p>{paragraph}</p>)}

      <div
      className={`divider-line bg-primary mt-2 ${isCentered ? "mx-auto" : ""}`}
      style={DividerStyle}
      aria-hidden="true">
      </div>
    </div>
  )
}