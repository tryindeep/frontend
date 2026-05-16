export const Input = ({
    type,
    placeholder,
    onClick
}) => {
  return (
    <span
      onClick={onClick}
      className={`px-8 py-4  text-white cursor-pointer text-2xl rounded-2xl bg-blue-500`}
    >
      <input type={type} placeholder={placeholder} className="outline-none"></input>
    </span>
  );
};
