import { Title } from "./Title"

export function Header(){

    return (
        <header className="border-2 border-gray-800 p-6 h-[400px] flex items-center md:rounded-md backdrop-blur-lg bg-gray-300">
            <Title name={"Francisco Javier González Viejo"} surname={"Full stack web developer"}></Title>
        </header>
    )
}