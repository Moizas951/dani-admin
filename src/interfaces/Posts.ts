/* eslint-disable camelcase */
export interface Posts {
    id: string;
    style: string;
    title: string;
    text: string;
    link: string;
    image: string;
    created_at: string;
}

export interface IPostRequest {
    style: string;
    title: string;
    text: string;
    link: string;
    image: string;
}
