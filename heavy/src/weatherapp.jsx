import { useState ,useEffect } from "react";

function Weather (){
    const [weatherData , setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    
    async function fetchData() {
        const url =
          "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/nairobi?unitGroup=us&key=SCCT4MYGUYVZ2B9KQ3BGQ9BF8&contentType=json";
        try {
          // make an HTTP request to the API
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
  
          // parse the response as JSON
          const data = await response.json();
          console.log(data);
  
          // Update the state with the fetched data
          setWeatherData(data);
        } catch (error) {
          // Handle any errors
          setError(error.message);
          console.error("Error fetching data:", error);
        }
      }
  
      // Call the fetchData function
      fetchData();
    }, []);





    return (
        <div>
             <div>
      {error && <p>Error : {error}</p>}
       {/* Display error if any */}
      {weatherData ? (
        <div>
          <h3>Weather in Nairobi</h3>
          {/* Display weather data, update this as per the actual data structure */}
          <p>Temperature: {weatherData.currentConditions.temp}°F</p>
          <p>Conditions: {weatherData.currentConditions.conditions}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
        </div>
    );
}
 export default Weather