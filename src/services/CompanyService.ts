import { AxiosResponse } from 'axios';
import { Company, ICompanyRequest } from 'interfaces/Companies';
import api from './api';

export default class CompanyService {
    static async GetAll(): Promise<Company[]> {
        const response: AxiosResponse<Company[]> = await api.get(
            '/companies/getAll'
        );

        return response.data;
    }

    static async CreateCompany(data: ICompanyRequest): Promise<Company> {
        const response: AxiosResponse<Company> = await api.post(
            '/companies/create',
            data
        );
        return response.data;
    }

    static async deleteCompany(id: string) {
        const response = await api.delete(`/companies/delete/${id}`);
        return response.data;
    }
}
