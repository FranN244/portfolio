

export function NavButton({children}) {

    return (

        <li>
            <button className="p-1 border-b-2 md:text-[20px] border-white w-20 hover:border-black ease-in-out transition duration-150 font-serif">{children}</button>
        </li>

    )

}