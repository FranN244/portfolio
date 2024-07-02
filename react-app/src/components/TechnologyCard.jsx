export function TechnologyCard({children}){

    return (

        <div className="h-16 w-[45%] m-2 border-2 border-white flex justify-center items-center text-white font-bold bg-gray-500 lg:hover:bg-white lg:hover:text-gray-500">
            <p>{children}</p>
        </div>
    )
    
}