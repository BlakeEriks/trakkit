import moment from "moment"

const useDate = () => {
    const today = moment().format('MM-DD-YYYY')

    return { today }
}

export default useDate