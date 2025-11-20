import { useState } from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

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
  const [success, setSuccess] = useState(null);

  //=================================================
  // DICTIONARIES : DATA
  //=================================================

  // Dictionnaire des messages d'erreur
  const errorMessages = {
    name: "Nom requis",
    email: "Adresse email requise",
    tel: "Numéro de téléphone requis",
    subject: "Sujet requis",
    message: "Message requis",
  };

  // Dictionnaire des setters
  const setters = {
    name: setName,
    email: setEmail,
    tel: setTel,
    subject: setSubject,
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

    if (success) setSuccess(null);
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
    if (!subject.trim()) newErrors.subject = errorMessages.subject;
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
    <form
      noValidate
      className="d-flex flex-column gap-2"
      onSubmit={handleSubmit}
    >
      {/* Nom */}
      <FormInput
        id="name"
        type="text"
        label="Nom"
        value={name}
        error={errors.name}
        onChange={handleChange}
        onBlur={validateField}
        placeholder="Votre nom"
      />

      {/* Email */}
      <FormInput
        id="email"
        type="email"
        label="Email"
        value={email}
        error={errors.email}
        onChange={handleChange}
        onBlur={validateField}
        placeholder="Votre adresse email"
      />

      {/* Téléphone */}
      <FormInput
        id="tel"
        type="tel"
        label="Téléphone"
        value={tel}
        error={errors.tel}
        onChange={handleChange}
        onBlur={validateField}
        placeholder="Votre numéro de téléphone"
      />

      {/* Sujet */}
      <FormInput
        id="subject"
        type="text"
        label="Sujet"
        value={subject}
        error={errors.subject}
        onChange={handleChange}
        onBlur={validateField}
        placeholder="Sujet"
      />

      {/* Message */}
      <FormTextarea
        id="message"
        label="Message"
        value={message}
        error={errors.message}
        onChange={handleChange}
        onBlur={validateField}
        placeholder="Votre message"
        rows={11}
      />

      {/* Bouton de soumission + message success */}
      <div className="d-flex justify-content-center mt-2">
        <div className="d-flex align-items-center gap-3">
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>

          {success && <span className="text-success">{success}</span>}
        </div>
      </div>
    </form>
  );
}
