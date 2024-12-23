async function fetchData() {
    const url ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/nairobi?unitGroup=us&key=SCCT4MYGUYVZ2B9KQ3BGQ9BF8&contentType=json";
    try{
    
        // make an http request to the api
        const response = await fetch(url);
        if (!response.ok){
            throw new Error (`Response status: ${response.status}`);

        }
        //parse the response as json
        const data = await response.json();
        console.log (data);
        return data;
    } catch(error){
        //handle any errors
        console.error("Error fetching data:" , error)
    }
    // calling the fetch data
    fetchData()


    
 }
}, [])