/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'
const AboutUs = props => {
  const [intro, setIntro] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(response => {
        setIntro(response.data.intro)
        setImageUrl(response.data.imageUrl)
      })
      .catch(error => {
        console.error('failed to retrieve information: ', error)
      })
  }, [])
  return (
    <>
      <h1>Jalen Zhang</h1>
      <p id="self-intro">{intro}</p>
      <img
        src={`${process.env.REACT_APP_SERVER_HOSTNAME}${imageUrl}`}
        alt="Jalen Zhang"
        height={200 * 1.7}
        width={200}
      />
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
