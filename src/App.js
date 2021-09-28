import { useState, useEffect } from "react";
import { Header, Loader, Map } from "./components";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //-- Obtain data from api
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      //-- Set api data
      setEventData(events);
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
