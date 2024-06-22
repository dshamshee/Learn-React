//  async function check(){
//    const result =  await fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json`)
//     const res = result.json
//     console.log(res.date)
// }

// check()


function fetchData() {
    axios.get('https://2024-06-21.currency-api.pages.dev/v1/currencies/usd.json')
      .then((response) => {
        const usdData = response.data.usd; // Corrected property access
        console.log(Object.keys(usdData)); // Display fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Call the function to fetch data
  fetchData();
  
  