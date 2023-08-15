import axios, { AxiosResponse } from 'axios';

const api = axios.create({
    // baseURL: 'https://api.jokolodang.com/api/v1',
    baseURL: 'http://localhost:3001',
});

// Create
const createData = async (endpoint: string, data: any): Promise<AxiosResponse<any>> => {
    try {
        const response = await api.post(endpoint, data);
        return response;
    } catch (error) {
        throw error;
    }
};

// Read
const fetchData = async (endpoint: string, id: number | null = null): Promise<AxiosResponse<any>> => {
    try {
        let response: AxiosResponse<any>;
        if (id === null) {
            response = await api.get(`${endpoint}`);
        } else {
            response = await api.get(`${endpoint}/${id}`);
        }
        return response;
    } catch (error) {
        throw error;
    }
};

// Update
const updateData = async (endpoint: string, id: number, data: any): Promise<AxiosResponse<any>> => {
    try {
        const response = await api.put(`${endpoint}/${id}`, data);
        return response;
    } catch (error) {
        throw error;
    }
};

// Delete
const deleteData = async (endpoint: string, id: number): Promise<void> => {
    try {
        await api.delete(`${endpoint}/${id}`);
    } catch (error) {
        throw error;
    }
};

export { createData, fetchData, updateData, deleteData };
