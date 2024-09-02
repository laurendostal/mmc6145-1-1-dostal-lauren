import { Link } from 'react-router-dom'
import Project from '../components/project'

export default function Home() {
  const project1={title:"Currency Calculator", description:"Currency Calculator is a project made to aid those traveling to places containing different forms of currency, or those who are curious about currency exchange. The site allows users to search by country for the type of currency that is used there on the Currency Lookup page. Users are able to convert one currency to another on the Currency Converter page.", link:"https://laurendostal.github.io/com6338-10-10-dostal-ellingson/"}
  const project2={title:"Run Journal", description:"Run Journal is a running log website that allows users to input, store, and analyze workout data from their inputted runs.  After accessing an account, users are able to input data including the date, time, distance (required) of a run, as well as the elapsed time, location, and weather conditions.", link:"https://run-journal-app-dostal-13bded41fc97.herokuapp.com/login"}

  return (
    <main>
      <div className="hero">
        <img className="headshot" src="/headshot.png" alt="Headshot of woman" width="250"></img>
        <h1 className="name-header">Lauren Dostal</h1>
        <h2 className="job-title">Web Designer • Frontend Developer • Graphic Designer</h2>
        <button type="submit" className="button">
          <Link to={`/about`}>About Me</Link>
        </button>
      </div>
      <br />
      <div className="projects-div">
        <h3>My Projects</h3>
        <div className="project1">
          <Project project={project1}/>
            <img src="public/currencycalculatorsite.jpeg" alt="Screenshot of Currency Calculator website" width="700"></img>
          </div>
        <div className="project2">
          <Project project={project2}/>
            <img src="public/runjournalsite.jpeg" alt="Screenshot of Run Journal website" width="700"></img>
        </div>
      </div>
    </main>
  )
}