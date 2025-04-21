export function Card(props) {
    return(

        //user profile card
        <div className="rounded-xl shadow-xl h-80 w-55 mt-16 flex flex-col border border-gray-300 -ml-8">
            <div className="flex justify-center p-2">
                <div className="h-25 w-25 mt-7 mb-2">
                    <img src={props.image} alt = "Profile" className="rounded-xl h-full w-full object-cover border border-gray-300"></img>
                </div>
            </div>
            <h1 className="text-lg font-bold text-gray-950 text-center">{props.name}</h1>
            <p className="text-gray-400 text-center text-sm font-semibold mt-2 mb-1">{props.gmail}</p>
            <p className="text-gray-400 text-center text-sm font-semibold mb-3">{props.contact}</p>
            <p className="text-gray-400 text-center text-sm font-semibold ">{props.state},{props.country}</p>
        </div>
    )
}