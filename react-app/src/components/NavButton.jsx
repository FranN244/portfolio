

export function NavButton({children,onClick}) {

    return (

        <li>
            <button onClick={onClick} className="p-1 border-b-2 md:text-[20px] border-white hover:border-black ease-in-out transition duration-150 font-serif">{children}</button>
        </li>

    )

}