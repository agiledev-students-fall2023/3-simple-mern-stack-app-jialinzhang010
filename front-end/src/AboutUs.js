/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
import image from './image.jpg'
import './AboutUs.css'
const AboutUs = props => {
  return (
    <>
      <h1>Jalen Zhang</h1>
      <p id="self-intro">
        Hello. My name is Jalen Zhang. I am a senior student majoring in computer science. I enjoy programming and playing soccer. I'm really looking forward to collaborating with my team members on an exciting project that combines creativity with technical skills.
      </p>
      <div></div>
      <img src={image} alt="Jalen Zhang" height={200 * 1.7} width={200} />
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
