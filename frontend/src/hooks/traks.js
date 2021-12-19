import { useQuery } from 'react-query';
import useHttp from './http';

const useTraks = userId => {
    const TRAK_API_URL='http://localhost:4000/traks'
    const http = useHttp()
    const {data} = useQuery(
        `traks/${userId}`,
        async () => {
            const url = `${TRAK_API_URL}?userId=${userId}`
            return await http.get(url)
        }
    )
    return data
}

export default useTraks