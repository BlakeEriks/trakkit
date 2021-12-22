import { useMutation, useQuery, useQueryClient } from 'react-query';
import useHttp from './http';

const useAktive = (userId, trakId) => {

    const AKTIVE_API_URL='http://localhost:4000/aktives/'
    const http = useHttp()
    const queryClient = useQueryClient()

    const {data} = useQuery(
        `aktives/${userId}`,
        async () => {
            const url = `${AKTIVE_API_URL}?userId=${userId}`
            return await http.get(url)
        }
    )

    const aktiveId = data?._id

    const aktiveMutation = useMutation( (startTime) => {
        const traks = {
            [trakId]: {
                startTime: startTime
            }
        }
        console.log({traks})
        return http.put(`${AKTIVE_API_URL}${aktiveId}`, {traks})   
    }, {
        onSuccess: () => queryClient.invalidateQueries(`aktives/${userId}`)
    })

    const setAktive = startTime => {
        aktiveMutation.mutate(startTime)
    }

    return {aktive: data?.traks ? data.traks[trakId] : null, setAktive}
}


export default useAktive