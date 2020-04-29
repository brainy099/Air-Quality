import React, { useState, useEffect } from "react";

import Landing from "./Pages/Landing/Landing";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    const apikey = "579b464db66ec23bdd000001a6c1ba5a69a94c3276afccf95a717f41";
    const fetchFunc = async () => {
      let response = await fetch(
        `https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=${apikey}&format=json&offset=0&limit=10000`
      );
      let data = await response.json();
      await setJsonData(data);
    };
    fetchFunc();
  }, []);
  return <Landing />;
}

export default App;
