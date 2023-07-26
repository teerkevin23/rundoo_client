import React, {useEffect, useState} from 'react';

const AsyncComponent = () => {
  const [footprint, setFootprint] = useState(0.00);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getResponse().then((response) => {
      setTimeout(() => {
        // do nothing... fake sleep
        if (response) {
          setFootprint(response.carbonEquivalent)
          setLoading(false);
        }
      }, 5000)
    });
  }, [])

  async function getResponse() {
    const response = await fetch(
      'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
          'X-RapidAPI-Key': '56cf7f5915msh0315806252d0400p187d3ajsnf66a9dbdcfd4',
        }
      }
    );

    const data = await response.json(); // Extracting data as a JSON Object from the response
    console.log(data)
    return data;
  }
  if (loading) {
    return (
    <div>
      still loading...
    </div>
    )
  }

  return (
    <>
      Async Component...
      Your carbon footprint, Kevin is: {footprint}
    </>
  )
};
export default AsyncComponent;