//import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Message from "./components/Message";

import { useGetMessageQuery } from "./store/message/api";

function App() {
  //const [message, setMessage] = useState("");
  const { data: message } = useGetMessageQuery(undefined);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch("http://localhost:3000");
  //     const data = await response.text();

  //     setMessage(data);
  //   };
  //   getData();
  // }, []);

  return (
    <>
      {message && <Message text={message} />}
      <div>
        <h1>{message}</h1>
        <Input />
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
