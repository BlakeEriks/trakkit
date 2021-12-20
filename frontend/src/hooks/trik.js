import { useQuery } from 'react-query';
import useHttp from './http';

const useTrik = (date, userId) => {
    const TRIK_API_URL='http://localhost:4000/triks'
    const http = useHttp()
    const { data } = useQuery(
        `triks/${date}/${userId}`,
        async () => {
            const url = `${TRIK_API_URL}/${date}?userId=${userId}`
            return await http.get(url)
        }
    )
    return data
}

export default useTrik