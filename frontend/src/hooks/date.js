import moment from "moment"

export const useDate = () => {
    const today = moment().format('MM-DD-YYYY')
    return { today }
}

// export const useSecondCounter = () => {
//     let count = 0
//     setInterval( () => {
//         count += 1
//     }, 1000)
//     return count
// }