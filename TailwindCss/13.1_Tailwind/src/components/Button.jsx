export const Button = ({ disabled, children, onClick }) => {
  // clsx , cx need to learn
  return (
    <span
      onClick={onClick}
      className={`px-32 py-4  text-white cursor-pointer text-2xl rounded-2xl  ${
        disabled ?  "bg-blue-200" : "bg-green-400"
      }`}
    >
      {children}
    </span>
  );
};
