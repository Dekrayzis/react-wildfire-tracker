import "./App.css";
import Map from "./components/Map";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //--
    //Obtain data from api
    const fetchEvents = async () => {
      //--
      // Set loading to display spinner
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      //-- Set api data
      setEventData(events);

      //-- Set loading to false to remove spinner
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="app">
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
