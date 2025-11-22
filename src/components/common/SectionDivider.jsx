export default function SectionDivider({
  level = "h2",
  size = "h2",
  title,
  paragraph,
  variant = "default"}) {

  const Heading = level;

  const textSize = size;

  const isCentered = variant === "centered";

  const DividerStyle = {
    height: isCentered ? "5px" : "3px",
    width: isCentered ? "30vw" : "100%",
  }

  const containerClasses = isCentered
    ? "text-center mb-5"
    : "text-start mb-4";

  return (
    <div className={containerClasses}>
      <Heading className={`${textSize} fw-bold`}>
        {title}
      </Heading>

      {paragraph && (
        <p>{paragraph}</p>)}

      <div
      className={`divider-line bg-primary ${isCentered ? "mt-4 mx-auto" : ""}`}
      style={DividerStyle}
      aria-hidden="true">
      </div>
    </div>
  )
}