export function TechnologyCard({children}){

    return(
        <div className=" bg-white border-2 m-3 border-gray-800 md:hover:bg-gray-400 p-2 max-h-10 font-bold md:hover:text-white md:transition-all md:ease-in-out text-gray-800 rounded-md md:text-[20px] text-[12px] flex items-center cursor-default">
            <p className="mx-5">{children}</p>
        </div>
    )
}