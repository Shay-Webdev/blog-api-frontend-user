import { useLocalStorage } from "../../hooks/useLocalStorage";

const NoLogin = () => {
  const [counter, setCounter] = useLocalStorage("counter", 0);
  const handler = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handler}>Increase</button>
    </div>
  );
};

export { NoLogin };
