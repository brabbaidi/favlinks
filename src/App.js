import React from 'react'
import LinkContainer from './components/LinkContainer'
import {useEffect, useState} from 'react'


function App() {

  const [message, setMessage] = useState(null)
  useEffect(()=>{
    // perform my API request
    // use fetch to get our data
    fetch("/api")
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      setMessage(data.message)
    })
    .catch(err =>{
      console.log(err)
    })

  }, [])

  return (
    <div className="App">
      <LinkContainer />
    </div>
  )
}

export default App
