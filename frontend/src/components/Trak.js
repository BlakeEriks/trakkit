const Trak = ({ emoji, name, type }) => {
    return (
        <div className="flex justify-between h-44 bg-white w-11/12 mb-2.5 rounded-xl box-shadow ">
            <div className="flex h-full w-1/2 items-center justify-center text-9xl">
                {emoji} 
            </div>
            <div className="w-1/2 h-full flex justify-center items-center text-4xl">
                {name}
            </div>
        </div>
    )
}

export default Trak