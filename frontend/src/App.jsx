import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function App() {

  const [jokes, setJockes] = useState([])
  const [error, setError] = useState([])


  useEffect(()=>{
     axios.get("/api/v1/jockes")
      .then((response) => {
        console.log(response);
        setJockes(response.data)
      })
      .catch(error => setError(error))
  },[])

  return (
    <>
      <h2>Jockes App</h2>
      <p>Total Jockes : {jokes.length}</p>
      {
        jokes?.map(jock => (
          <div key={jock.id}>
            <p>{jock.title}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
