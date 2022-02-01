import { useState } from "react";

function App()
{
  console.log("App");
  const [count,setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={e=>setCount(count+1)}>{count}</button>
      <SubComponent></SubComponent>
    </div>
  )
}

function SubComponent()
{
  console.log("SubComponent");
  const [count,setCount] = useState<number>(0);

  return (
      <button onClick={e=>setCount(count+1)}>{count}</button>
  )
}

export default App;
