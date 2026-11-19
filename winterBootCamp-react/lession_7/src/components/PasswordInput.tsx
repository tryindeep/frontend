import useToggle from "@/hooks/useToggle";

export default function PasswordInput() {
  const { toggle, handleToggle } = useToggle();

  return (
    <div>
      <input
        type={toggle ? "text" : "password"}
        name=""
        id=""
        placeholder="Password"
      />
      <button onClick={handleToggle}>
        {toggle === false ? "show" : "hide"}
      </button>
    </div>
  );
}
