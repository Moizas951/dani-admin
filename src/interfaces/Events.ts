/* eslint-disable camelcase */
export interface Event {
    id: string;
    eventType: string;
    eventStartDate: string;
    eventEndDate: string;
    reward: string;
    rules: string;
    link: string;
    active: boolean;
}

export interface IEventRequest {
    eventType: string;
    eventStartDate: string;
    eventEndDate: string;
    reward: string;
    rules: string;
    link: string;
    active: boolean;
}
