import axios from "axios";
import { Category, Product } from "../type";

axios.defaults.baseURL = 'https://fakestoreapi.com'

export const ProductService = {
    async getProducts(): Promise<Product[]> {
        const response = await axios.get<Product[]>('/products');
        return response.data;
    }
}

export const CategoryService = {
    async getCategories(): Promise<Category[]> {
        const response = await axios.get<string[]>('/products/categories');
        
        return response.data.map<Category>((element) => {
            return { 
                id: element,
                category: element,
            }
        });
    }
}