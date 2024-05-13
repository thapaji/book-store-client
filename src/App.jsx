import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
    </>
  );
}

export default App;
