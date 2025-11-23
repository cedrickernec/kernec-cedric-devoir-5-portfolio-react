export default function ModalGitHubItem({ icon, label, value, type, href }) {
  const displayValue = value ?? "\u00a0";

  return (
    <div className="github-item-wrapper mb-2 pb-2">
      <div className="ps-3">
        <p className="text-start mb-0">
          <i className={`${icon} github-item-icon me-2`} aria-hidden="true" />
          {type === "link" && href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title="Voir le profil GitHub"
            >
              {displayValue}
            </a>
          ) : (
            <>
              {label && label} {displayValue}
            </>
          )}
        </p>
      </div>
    </div>
  );
}
