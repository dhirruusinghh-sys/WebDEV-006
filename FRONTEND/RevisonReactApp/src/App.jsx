import { MdOutlineSignalWifi4Bar } from "react-icons/md";
import { FaSave } from "react-icons/fa";



import contactImage from "./assets/ganesh ji.jpg";


function App() {
  return (
    <>
      <div className="bg-primary p-2 text-bg-light">
        <MdOutlineSignalWifi4Bar /> <span>My Revision App</span>
      </div>

      <img src={contactImage} alt="" className="w-400 h-400" />


      <button className="btn btn-primary d-flex gap-2 align-items-center">
        <FaSave className="fs-5" text-danger />  <span>Save Data</span>
      </button>
    </>
  );
}

export default App;
