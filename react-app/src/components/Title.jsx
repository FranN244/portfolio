export function Title({name,surname}){

    return (

        <div className="font-serif">
            <h1 className="md:text-[50px] text-[35px] text-gray-800">{name}</h1>
            <p className="md:text-[20px] text-[15px] italic text-gray-700">{surname}</p>
        </div>
    )

}