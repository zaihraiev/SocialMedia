export default function Input({ label, id, ...props }) {
  return <input id={id} type="text" placeholder={label} required {...props} />;
}
