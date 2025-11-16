import { useState } from "react";

export default function FormContact() {

  //=================================================
  // STATES & ERRORS
  //=================================================

  // States des champs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // State des erreurs
  const [errors, setErrors] = useState({});

  // State de validation du formulaire
  const [success, setSuccess] = useState("");

  //=================================================
  // DICTIONARIES : DATA
  //=================================================

  // Dictionnaire des messages d'erreur
  const errorMessages = {
    name: "Nom requis",
    email: "Adresse email requise",
    tel: "Numéro de téléphone requis",
    sujet: "Sujet requis",
    message: "Message requis",
  };

  // Dictionnaire des setters
  const setters = {
    name: setName,
    email: setEmail,
    tel: setTel,
    sujet: setSubject,
    message: setMessage,
  };

  //=================================================
  // HANDLERS : ONCHANGE / ONBLUR
  //=================================================

  const handleChange = (e) => {
    const field = e.target.id;
    const value = e.target.value;

    if (setters[field]) {
      setters[field](value);
    }

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  //=================================================
  // VALIDATION/VERIFICATION (GLOBAL)
  //=================================================

  const validateField = (e) => {
    const field = e.target.id;
    const value = e.target.value.trim();

    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [field]: errorMessages[field],
      }));
    } else if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = errorMessages.name;
    if (!email.trim()) newErrors.email = errorMessages.email;
    if (!tel.trim()) newErrors.tel = errorMessages.tel;
    if (!subject.trim()) newErrors.sujet = errorMessages.sujet;
    if (!message.trim()) newErrors.message = errorMessages.message;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Formulaire invalide");
      return;
    }

    console.log("Formulaire envoyé !");

    setName("");
    setEmail("");
    setTel("");
    setSubject("");
    setMessage("");

    setSuccess("Message envoyé !");
  };

  //=================================================
  // RENDU JSX
  //=================================================

  return (
    <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
      
      {/* Nom */}
      <div>
        <label htmlFor="name" className="form-label visually-hidden">
          Nom
        </label>
        <input
          type="text"
          id="name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          value={name}
          onChange={handleChange}
          onBlur={validateField}
          placeholder="Votre nom"
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name}</div>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="form-label visually-hidden">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          value={email}
          onChange={handleChange}
          onBlur={validateField}
          placeholder="Votre adresse email"
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email}</div>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="tel" className="form-label visually-hidden">
          Téléphone
        </label>
        <input
          type="tel"
          id="tel"
          className={`form-control ${errors.tel ? "is-invalid" : ""}`}
          value={tel}
          onChange={handleChange}
          onBlur={validateField}
          placeholder="Votre numéro de téléphone"
        />
        {errors.tel && (
          <div className="invalid-feedback">{errors.tel}</div>
        )}
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="sujet" className="form-label visually-hidden">
          Sujet
        </label>
        <input
          type="text"
          id="sujet"
          className={`form-control ${errors.sujet ? "is-invalid" : ""}`}
          value={subject}
          onChange={handleChange}
          onBlur={validateField}
          placeholder="Sujet"
        />
        {errors.sujet && (
          <div className="invalid-feedback">{errors.sujet}</div>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label visually-hidden">
          Message
        </label>
        <textarea
          id="message"
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
          value={message}
          onChange={handleChange}
          onBlur={validateField}
          placeholder="Votre message"
          rows={11}
        />
        {errors.message && (
          <div className="invalid-feedback">{errors.message}</div>
        )}
      </div>

      {/* Bouton de soumission + message success */}
      <div className="d-flex justify-content-center mt-2">
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-primary">
            Envoyer
          </button>

          {success && (
            <span className="text-success">{success}</span>
          )}
        </div>
      </div>
    </form>
  );
}
