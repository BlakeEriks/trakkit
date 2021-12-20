import { useState } from "react"

const Trak = ({ emoji, name, type, setSelected, selected, _id, fields }) => {

    const [trakForm, setTrakForm] = useState(...fields.map(field => ({[field.name]: ''}) ))

    const updateForm = event => {
        setTrakForm({...trakForm, [event.target.name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()

    }

    const selectedTrak = (
        <div className="flex flex-col h-20 bg-gray-600 w-11/12 mb-2.5 rounded-xl box-shadow">
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

    return selected ? selectedTrak : displayTrak
    
}

export default Trak