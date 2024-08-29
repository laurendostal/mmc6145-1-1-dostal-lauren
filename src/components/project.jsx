export default function Project(props) {
    const project=props.project
    return(
        <div className="project">
            <div key={project.title}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <button type="submit" className="button">
                    <a href={project.link}>Check it out</a>
                </button>
             </div>
        </div>
    )
}