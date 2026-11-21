import useDebounceHook from "./hooks/useDebounceHook";

export function App() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  const debounceFn = useDebounceHook(sendDataToBackend);
  return (
    <>
      <input type="text" onChange={debounceFn}/>
    </>
  );
}

export default App;
