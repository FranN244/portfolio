export function ProjectCard({children,description,imgPath,url,technologies}){

    return(

        <div className="h-[400px] border-2 border-gray-800">
            <div className="h-[60%]">
                <img src={"/src/assets/" + imgPath} alt="Project Image" className="h-[100%]"/>
            </div>
            <div className="h-[40%] bg-gray-300 border-t-2 border-gray-800 p-4">
                <h2 className="text-gray-800 font-bold text-[22px] font-serif h-[20%]">{children}</h2>
                <div className="h-[60%] py-2">
                    <p className="text-gray-500 font-semibold">{description}</p>
                </div>
                <div className="flex items-center justify-between py-4 h-[20%]">
                    <div className="flex space-x-2">
                        {technologies.map(technology => {
                            return (<span className="text-[15px] text-gray-800 italic font-semibold">{technology}</span>)
                        })}
                    </div>
                    <button className="bg-white border-2 border-gray-800 px-4 text-gray-800 font-bold hover:bg-gray-800 hover:text-white transition-all ease-in-out"><a href={url}>VER</a></button>
                </div>
            </div>
        </div>
    )

}