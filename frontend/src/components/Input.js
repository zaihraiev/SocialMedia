export default function Input({ label, id, ...props }) {
  return (
    <input
      id={id}
      type="text"
      name={id}
      placeholder={label}
      required
      {...props}
    />
  );
}
