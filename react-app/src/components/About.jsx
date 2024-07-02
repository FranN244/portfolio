import { Description } from "./Description"
import { Experince } from "./Experience"

export function About(){

    return (
        <div className="md:flex md:space-x-2">
            <Description></Description>
            <Experince></Experince>
        </div>
    )

}