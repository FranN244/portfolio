import { TechnologyCard } from "./TechnologyCard"

export function Technologies(){

    return (
        <div className="bg-gray-300 md:border-2 border-y-2 border-gray-800 md:rounded-md flex font-serif overflow-x-auto">
            <TechnologyCard>Laravel</TechnologyCard>
            <TechnologyCard>Tailwind</TechnologyCard>
            <TechnologyCard>React</TechnologyCard>
            <TechnologyCard>JavaScript</TechnologyCard>
        </div>
    )
}