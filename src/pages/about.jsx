import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-div">
      <img className="graduation-headshot" src="public/gradheadshot.png" alt="Headshot of woman in a cap and gown" width="400"></img>
      <h3 className="about-header">About Me</h3>
      <div className="bio">
        <p>Hello, I’m Lauren!  I am currently a student at the University of Florida getting my master’s degree in Web Design and Online Communication.  I specialize in website design and frontend development.  My goal is to help people express their thoughts, ideas, and messages through design that is both aesthetically pleasing and highly functional.
        <br />
        <br />
        I have a bachelor’s degree in English with a concentration in film and media studies, along with a minor in communication studies.  My knowledge of media and communication paired with my practical design skills allow me to design websites and applications that send the message you want.  I am based in Orlando, Florida and would love to make your design dreams a reality!</p>
        <button type="submit" className="button">
          <Link to={`/contact`}>Contact Me</Link>
        </button>  
      </div>
    </div>
  )
}