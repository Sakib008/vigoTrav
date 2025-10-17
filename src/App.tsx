import { useDispatch, useSelector } from "react-redux";
import { setDay, clearDay } from "./store/Slices/EventSlice";
import type { RootState, AppDispatch } from "./store/store";

function App() {

const dispatch = useDispatch<AppDispatch>();
const day = useSelector((state: RootState) => state.itinerary.day);

// Update the day:
const daySet = ()=> dispatch(setDay({id: 1, title: "My Day", notes: "My Notes"}));

// Clear the day:
const dayClear = () => dispatch(clearDay());


  return (
    <div className="App flex flex-col items-center justify-center gap-2">
      This is working as Store
      <h1>{day.title}</h1>
      <p>{day.notes}</p>
      <button onClick={daySet}>Set Day</button>
      <button onClick={dayClear}>Clear Day</button>
    </div>
  )
}

export default App
