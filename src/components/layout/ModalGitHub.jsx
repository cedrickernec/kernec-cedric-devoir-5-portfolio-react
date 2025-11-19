import { useEffect, useState } from "react";
import { githubFields } from "../../data/modalGithubData";
import ModalGitHubItem from "./ModalGitHubItem";

export default function ModalGitHub() {

  const [githubData, setGithubData] = useState(null);

  const getGithubProfil = async () => {
      const res = await fetch("https://api.github.com/users/github-john-doe");
      const json = await res.json();
      setGithubData(json);
      console.log(json);
  }

  useEffect(() => {
    getGithubProfil();
  }, [])

  return (
    <div
      className="modal modal-lg"
      id="githubModal"
      tabIndex="-1"
      aria-labelledby="githubModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark border-secondary text-white shadow-lg">

          {/* HEADER */}
          <div className="modal-header border-secondary">
            <h5 className="modal-title" id="githubModalLabel">
              Mon profil GitHub
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Fermer"
            ></button>
          </div>

          {/* BODY */}
          <div className="modal-body text-center">
            {!githubData && <p className="text-center">En cours de chargement...</p>}
            {githubData && (
              <div className="row p-3 g-4">

                {/* AVATAR */}
                <div className="col-avatar col-12 col-md-6">
                  <img
                  src={githubData.avatar_url}
                  alt="Avatar GitHub"
                  />
                </div>

                {/* INFOS */}
                <div className="col-info col-12 col-md-6 mt-2">
                  {githubFields.map((field, index) => {
                    const value = githubData[field.key];

                    return (
                      <ModalGitHubItem
                      key={index}
                      icon={field.icon}
                      label={field.label}
                      value={value}
                      type={field.type}
                      href={field.hrefKey ? githubData[field.hrefKey] : null}
                      />
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="modal-footer border-secondary">
            <button
              type="button"
              className="btn btn-secondary rounded-3 px-4"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
