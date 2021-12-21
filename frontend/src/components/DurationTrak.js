const DurationTrak = () => {
    return (
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
}

export default DurationTrak