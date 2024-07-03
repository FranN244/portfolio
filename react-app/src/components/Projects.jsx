import { ProjectCard } from "./ProjectCard"

export function Projects({projects}){

    let listProjects = projects.map(project => 

        <ProjectCard  key={project.name}  description={project.description}
        url={project.url} 
        imgPath={project.imgPath}
        technologies={project.technologies}>
            {project.name}
        </ProjectCard>
    )

    return(

        <div>
            <div className="h-20 flex items-center justify-center">
                <p className="md:text-[30px] text-[22px] font-bold font-serif text-gray-800">Proyectos</p>
            </div>
            <div className="min-h-[500px] grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                {listProjects}
            </div>
        </div>
    )

}