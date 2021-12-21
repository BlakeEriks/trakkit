import { useState, useEffect } from "react"
import moment from "moment"
import useAktive from "../hooks/aktive"
// import { useSecondCounter } from "../hooks/date"

const Trak = ({ emoji, name, type, setSelected, selected, _id, fields }) => {

    const [trakForm, setTrakForm] = useState(...fields.map(field => ({[field.name]: ''}) ))
    const userId = "61be6d13e5cce47262ec57b9"
    const {aktive, setAktive} = useAktive(userId, _id)
    // const everySecond = useSecondCounter()
    const [elapsedTime, setElapsedTime] = useState(null) // moment(new Date().getUTCMilliseconds() - new Date(aktive?.startTime).getUTCMilliseconds()).format("hh:mm:ss")

    useEffect( () => {
        console.log('init interval')
    
        const interval = setInterval(() => {
            let diff = parseInt( (new Date()- new Date(aktive?.startTime)) / 1000)
            console.log(diff)
            const hours = parseInt(diff / 3600)
            diff %= 3600
            const mins = parseInt( diff / 60)
            const secs = parseInt( diff % 60)
            console.log(`${hours}:${mins}:${secs}`)
            setElapsedTime(`${hours}:${mins}:${secs}`)
        }, 1000)

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
          };
    }, [])

    const updateForm = event => {
        setTrakForm({...trakForm, [event.target.name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        console.log('in submit')
        if (type === 'Duration') {
            setAktive(new Date())
        }
    }

    const DurationTrak = (
        <div className="flex flex-col h-20 bg-gray-600 w-11/12 mb-2.5 rounded-xl box-shadow">
            {/* <div className="flex w-full justify-center text-3xl font-light text-white">
                {name + ' ' + emoji}
            </div> */}
            {
                aktive ?
                    <div className="w-full flex justify-center items-center">
                        {emoji}
                        {elapsedTime}
                    </div>
                :
                <form className="w-full flex justify-center items-center" onSubmit={onSubmit}>
                    {fields.map( (field, index) => <input key={index} placeholder={field.name} name={field.name} value={trakForm[field.name]} onChange={updateForm} ></input>)}
                    <button type="submit">
                        Go
                    </button>
                </form>
            }
        </div>
    )

    const selectedTrak = (
        <div onClick={() => setSelected(null)} className="flex flex-col h-20 bg-gray-600 w-11/12 mb-2.5 rounded-xl box-shadow">
            <div className="flex w-full justify-center text-3xl font-light text-white">
                {name + ' ' + emoji}
            </div>
            <form className="w-full flex justify-center items-center">
                {fields.map( (field, index) => <input key={index} placeholder={field.name} name={field.name} value={trakForm[field.name]} onChange={updateForm} ></input>)}
                <button>
                    Go
                </button>
            </form>
        </div>
    )

    const displayTrak = (
        <div onClick={() => setSelected(_id)} className="flex h-20 bg-white w-11/12 mb-2.5 rounded-xl box-shadow">
            <div className="flex h-full w-full items-center justify-center text-5xl font-light text-gray-600">
                {name + ' ' + emoji} 
            </div>
        </div>
    )

    return selected ? (type === 'Duration' ? DurationTrak : selectedTrak) : displayTrak
    
}

export default Trak