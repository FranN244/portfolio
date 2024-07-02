export function WorkCard({children}){

    return (

        <div className="h-16 border-2 border-white flex p-2 items-center text-white font-bold bg-gray-500 group lg:hover:bg-white lg:hover:text-gray-500 transition-all ease-in-out duration-150">
            <div>
                <p>{children}</p>
                <p className="md:text-gray-500 text-white md:hidden group-hover:block transition-all ease-in-out duration-150 md:text-[13px] text-[10px]">Actualmente trabajando</p>
            </div>
        </div>
    )
    
}