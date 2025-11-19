export default function FormTextarea({
  id,
  label,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  rows = 5,
}) {
  return (
    <div>
      <label htmlFor={id} className="form-label visually-hidden">
        {label}
      </label>

      <textarea
        id={id}
        className={`form-control ${error ? "is-invalid" : ""}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={rows}
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