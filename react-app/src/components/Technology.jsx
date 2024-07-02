import { TechnologyCard } from "./TechnologyCard"

export function Technology(){

    return( 
        <div className="md:w-[50%] space-y-2 lg:rounded-md bg-gray-500 p-4 ">
            <div className="">
                <p className="md:text-[30px] text-[22px] font-bold font-serif text-white">¿Que lenguajes sé?</p>
            </div>
            <div className="flex flex-wrap">
                <TechnologyCard>LARAVEL</TechnologyCard>
                <TechnologyCard>REACT</TechnologyCard>
                <TechnologyCard>TAILWIND CSS</TechnologyCard>
            </div>
        </div>
    )

}