import axios from 'axios';
import { parseCookies } from 'nookies';

export function getApi() {
    const { '@app:token': token } = parseCookies();

    const api = axios.create({
        baseURL: 'https://dani.polijrinternal.com/'
    });

    if (token) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (api.defaults.headers as any).Authorization = `Bearer ${token}`;
    }

    return api;
}
