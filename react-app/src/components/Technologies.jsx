import { TechnologyCard } from "./TechnologyCard"
import { Projects } from "./Projects"
import { useState } from "react"


export function Technologies(){

    let initialProjects = [{
        name : "Reproductor de Música",
        description : "Reproductor de musica mp3 categorizado por albumes e relización de pedidos y sistema de traducción en 3 idiomas.",
        imgPath : "image.png",
        technologies : ["Laravel","Tailwind","JavaScript"],
        url : "https://github.com/FranN2442/MamaPizza.git"
    }]

    const [projects, setProjects] = useState(initialProjects);

    function filter(tech){
    
        let filtredProjects = initialProjects.filter(prjts => prjts.technologies.includes(tech))
        setProjects(filtredProjects)
    
    }

    return (
        <div>
            <div className="bg-gray-300 md:border-2 border-y-2 border-gray-800 md:rounded-md flex font-serif overflow-x-auto">
                <TechnologyCard onClick={() => filter('Laravel')}>Laravel</TechnologyCard>
                <TechnologyCard onClick={() => filter('Tailwind')}>Tailwind</TechnologyCard>
                <TechnologyCard onClick={() => filter('React')}>React</TechnologyCard>
                <TechnologyCard onClick={() => filter('JavaScript')}>JavaScript</TechnologyCard>
            </div>
            <div>
                <Projects projects={projects}></Projects>
            </div>
        </div>
    )
}