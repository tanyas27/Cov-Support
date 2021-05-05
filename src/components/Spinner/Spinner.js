import './Spinner.css';
import HashLoader from "react-spinners/HashLoader";

function Spinner() {
    return (
        <div className="spinner">
            <div id="hash">
                <HashLoader size={50} color={"#f39489"}/>
            </div>
        </div>
    );
}
  
export default Spinner;