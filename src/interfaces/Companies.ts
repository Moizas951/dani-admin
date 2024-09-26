export interface Address {
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

export interface Company {
    id: string;
    name: string;
    email: string;
    password: string;
    image: string;
    subscriptionPlan: string;
    branch: string;
    address: Address;
}

export interface ICompanyRequest {
    name: string;
    email: string;
    image: string;
    subscriptionPlan: string;
    branch: string;
    planExpirationDate: string;
    address: {
        street: string;
        numberHouse: number;
        neighborhood: string;
        city: string;
        state: string;
        cep: string;
    };
}
