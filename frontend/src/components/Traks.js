import useDate from "../hooks/date"
import useTrik from "../hooks/trik"
import useTraks from "../hooks/traks"
import Trak from "./Trak"

const Traks = () => {

    const userId = "61be6d13e5cce47262ec57b9"
    const { today } = useDate()
    const traks = useTraks(userId)
    const trik = useTrik(today, userId)
    
    return (
        <div className="flex flex-wrap justify-evenly my-5">
            {traks.map(trak => <Trak {...trak}/>)}
        </div>
    )
}

export default Traks