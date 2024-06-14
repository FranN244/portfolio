

export function NavButton({children}) {

    return (

        <li>
            <button className="p-1 border border-black rounded-md w-24 hover:text-blue-400 hover:border-blue-400 ease-in-out transition hover:scale-110">{children}</button>
        </li>

    )

}