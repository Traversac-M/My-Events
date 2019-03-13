import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://www.eventbriteapi.com/v3/";
axios.defaults.headers.common["Authorization"] = "Bearer BRIBPWBVJNJNVZQVW6ME";

ReactDOM.render(<App />, document.getElementById("root"));
