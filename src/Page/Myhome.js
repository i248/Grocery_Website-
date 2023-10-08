import React, { useEffect } from 'react'

const Myhome = () => {
     useEffect(() => {
        const url = `http://localhost:9000/api/getproduct`;


    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);
  return (
    <div>
      
    </div>
  )
}

export default Myhome
