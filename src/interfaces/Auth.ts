/* eslint-disable camelcase */
interface Address {
    id: string;
    street: string;
    numberHouse: number;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    companyId: string;
    userId: string | null;
}

interface Company {
    id: string;
    name: string;
    email: string;
    password: string;
    image: string;
    subscriptionPlan: string;
    branch: string;
    address: Address;
}

interface Administrator {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
}

export default interface AuthResponse {
    administrator?: Administrator;
    company?: Company;
    token: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    idade: number;
    sexo: string;
}
