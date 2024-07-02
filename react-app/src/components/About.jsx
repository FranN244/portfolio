import { Description } from "./Description"
import { Technology } from "./Technology"

export function About(){

    return (
        <div className="md:flex lg:space-x-2">
            <Description></Description>
            <Technology></Technology>
        </div>
    )

}