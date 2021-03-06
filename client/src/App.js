import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
	  const [pair, setPair] = useState({});
	  const [result, setRes] = useState(0);
	  useEffect(() => {
		      axios
		        .get("http://203.171.21.65:3002/compute")
		        .then((response) => console.log(response.data))
		        .catch((error) => console.log(error.response));
		    }, []);

	  const handleChange = (e) => {
		      setPair({ ...pair, [e.target.name]: parseInt(e.target.value) });
		    };

	  const handleCompute = (e) => {
		      console.log(pair);
		      e.preventDefault();
		      axios
		        .post("http://203.171.21.65:3002/compute", pair)
		        .then((response) => setRes(response.data.result))
		        .catch((error) => console.log(error.response));
		    };
	  return (
		      <div className="App">
		        <header className="App-header">
		          <img src={logo} className="App-logo" alt="log"/>
		          <form onSubmit={handleCompute}>
		            <label>First number: </label>
		            <input type="number" onChange={handleChange} name="first_number" />
		            <br />
		            <label>Second number: </label>
		            <input type="number" onChange={handleChange} name="second_number" />
		            <br />
		            <button type="submit">Compute</button>
		          </form>
		          <h1>Result: {result}</h1>
		        </header>
		      </div>
		    );
}

export default App;

