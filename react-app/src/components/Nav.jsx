import { HomeIcon } from "./icons/HomeIcon";
import { NavButton } from "./NavButton";

export function Nav(){

    let goTo = (id) => {

        let div = document.getElementById(id);
        div.scrollIntoView({behavior : 'smooth'})

    }

    return (

        <nav className="p-4 h-content space-y-2 justify-center md:justify-end flex sticky top-0 z-50 bg-white">
            <ul id="nav-list" className="flex space-x-5 items-center font-mono">
                <NavButton onClick={() => goTo('about-div')}>Sobre mi</NavButton>
                <NavButton onClick={() => goTo('contact-div')}>Contacto</NavButton>
                <NavButton onClick={() => goTo('projects-div')}>Proyectos</NavButton>
            </ul>
        </nav>

    )


}