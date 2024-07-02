import { ProjectCard } from "./ProjectCard"

export function Projects(){

    return(

        <div className="">
            <div className="h-20 flex items-center justify-center">
                <p className="md:text-[30px] text-[22px] font-bold font-serif text-gray-800">Projects</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                <ProjectCard    description={"Reproductor de musica mp3 categorizado por albumes e relización de pedidos y sistema de traducción en 3 idiomas."}
                                url={"https://github.com/FranN2442/MamaPizza.git"} 
                                imgPath={"image.png"}
                                technologies={["Laravel","Tailwind","JavaScript"]}>
                                    Reproductor de Música
                                </ProjectCard>
            </div>
        </div>
    )

}