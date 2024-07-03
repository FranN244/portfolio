import { Description } from "./Description"
import { Experince } from "./Experience"

export function About(){

    return (
        <div className="md:flex md:space-x-2"  id="about-div">
            <Description></Description>
            <Experince></Experince>
        </div>
    )

}