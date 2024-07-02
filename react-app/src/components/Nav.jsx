import { HomeIcon } from "./icons/HomeIcon";
import { NavButton } from "./NavButton";

export function Nav(){

    return (

        <nav className=" p-4 h-content space-y-2 justify-center md:justify-end flex">
            <ul id="nav-list" className="flex space-x-5 items-center font-mono">
                <NavButton>Sobre mi</NavButton>
                <NavButton>Contacto</NavButton>
                <NavButton>Proyectos</NavButton>
            </ul>
        </nav>

    )


}