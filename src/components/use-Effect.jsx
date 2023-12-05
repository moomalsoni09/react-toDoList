import React, { useEffect, useState } from "react";

// const DataFetchingComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Fetch data from an API
//     fetch("https://api.example.com/data")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []); // The empty dependency array means this effect runs once, similar to componentDidMount

//   return (
//     <div>
//       <h2>Data:</h2>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
//     </div>
//   );
// };

// export default DataFetchingComponent;
// import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(1);

  const [email, setEmail] = useState();
  const [name, setName] = useState();

  function handleChange() {
    setCount(count + 1);
  }

  async function getUserData() {
    const userData = await fetch(
      `https://jsonplaceholder.typicode.com/users/${count}`
    );
    const convertedData = await userData.json();

    setEmail(convertedData.email);
    setName(convertedData.name);
  }

  useEffect(() => {
    console.log("New count is ", count);
    getUserData();
  }, [count]);

  return (
    <>
      <h1>I've rendered {count} times!</h1>

      <h3>User Details </h3>

      {email && name ? (
        <>
          {" "}
          <p>Email :{email} </p>
          <p>name : {name}</p>
        </>
      ) : (
        <>Loading...</>
      )}

      <button onClick={handleChange}>Change Count </button>
    </>
  );
}

export default Timer;