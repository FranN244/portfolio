export function ProjectCard({children,description,imgPath,url,technologies}){

    let listTech = technologies.map(technology => 
        <span key={technology} className="text-[15px] text-gray-800 italic font-semibold">{technology}</span>
    )

    return(

        <div className="h-[500px] border-2 border-gray-800 group">
            <div className="h-[60%] overflow-hidden">
                <img src={"/src/assets/" + imgPath} alt="Project Image" className="h-[100%] group-hover:scale-110 transition-transform ease-in-out duration-200"/>
            </div>
            <div className="h-[40%] bg-gray-300 border-t-2 border-gray-800 p-4 space-y-1">
                <h2 className="text-gray-800 font-bold text-[22px] font-serif h-[20%]">{children}</h2>
                <div className="h-[60%] flex items-center">
                    <p className="text-gray-500 font-semibold">{description}</p>
                </div>
                <div className="flex items-center justify-between h-[20%]">
                    <div className="flex space-x-2">
                        {listTech}
                    </div>
                    <button className="bg-white border-2 border-gray-800 px-4 text-gray-800 font-bold hover:bg-gray-800 hover:text-white transition-all ease-in-out"><a href={url}>VER</a></button>
                </div>
            </div>
        </div>
    )

}