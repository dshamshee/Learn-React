import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json`)
        // .then((response)=> response.json)
        // .then((response)=> setData(response[currency]))
       

        axios.get(`https://2024-06-21.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((response) => {
        //   const usdData = response.data.usd.inr; // Corrected property access
          setData(response.data[currency])
        //   console.log(response[inr]); // Display fetched data
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });


    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;