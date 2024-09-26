import { AxiosResponse } from 'axios';
import { Event, IEventRequest } from 'interfaces/Events';
import api from './api';

export default class EventService {
    static async GetAll(): Promise<Event[]> {
        const response: AxiosResponse<Event[]> = await api.get(
            '/events/getAll'
        );

        return response.data;
    }

    static async CreateEvent(data: IEventRequest): Promise<Event> {
        const response: AxiosResponse<Event> = await api.post(
            '/events/create',
            data
        );
        return response.data;
    }

    static async deleteEvent(id: string) {
        const response = await api.delete(`/events/delete/${id}`);
        return response.data;
    }
}
