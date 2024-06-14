import { HomeIcon } from "./icons/HomeIcon";
import { NavButton } from "./NavButton";

export function Nav(){

    return (

        <nav className="bg-green-400 p-4 justify-between h-content space-y-2 md:space-y-0 md:flex">
            <a href="/" className="flex items-center hover:text-blue-400 ease-in-out transition space-x-2">
                <HomeIcon h="30" w="30"></HomeIcon>
                <span className="text-2xl font-serif">FRANDEV</span>
            </a>
            <ul id="nav-list" className="flex space-x-5 items-center font-mono justify-center md:justify-normal">
                <NavButton>Projects</NavButton>
                <NavButton>About</NavButton>
                <NavButton>Contact</NavButton>
            </ul>
        </nav>

    )


}