export default function AccordionItem({
  id,
  title,
  children,
  parentId,
  defaultOpen = false,
}) {
  return (
    <div className="accordion-item">
      <h3 id={`${id}-header`} className="accordion-header">
        <button
          className={`accordion-button ${defaultOpen ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded={defaultOpen}
          aria-controls={id}
          aria-labelledby={`${id}-header`}
        >
          {title}
        </button>
      </h3>
      <div
        id={id}
        className={`accordion-collapse collapse ${defaultOpen ? "show" : ""}`}
        data-bs-parent={`#${parentId}`}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}
