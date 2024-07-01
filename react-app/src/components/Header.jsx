import { Title } from "./Title"

export function Header(){

    return (
        <header className="p-6 h-[30%] flex items-center border lg:rounded-md backdrop-blur-lg bg-black/10">
            <Title name={"Francisco Javier González Viejo"} surname={"Full stack web developer"}></Title>
        </header>
    )
}