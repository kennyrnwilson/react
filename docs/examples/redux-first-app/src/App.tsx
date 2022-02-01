import { useDispatch, useSelector } from "react-redux";
import { numberSlice } from "./redux/ReduxStore";

function App()
{
  const data = useSelector( (state:any) => state.num);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={e=> dispatch(numberSlice.actions.addToValue(4)) }>{data}</button>
    </div>
  )
}

export default App;
