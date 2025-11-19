export default function FormInput({
  id,
  type = "text",
  label,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
}) {
  return (
    <div>
      <label htmlFor={id} className="form-label visually-hidden">
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`form-control ${error ? "is-invalid" : ""}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      {error && (
        <div id={`${id}-error`} className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
}
