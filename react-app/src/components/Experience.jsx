import { WorkCard } from "./WorkCard"

export function Experince(){

    return( 
        <div className="md:w-[50%] space-y-2 md:rounded-md bg-gray-500 p-4">
            <div className="">
                <p className="md:text-[30px] text-[22px] font-bold font-serif text-white">Experience</p>
            </div>
            <div className="space-y-2 cursor-default">
                <WorkCard>COCODIN TECHNOLOGY</WorkCard>
            </div>
        </div>
    )

}