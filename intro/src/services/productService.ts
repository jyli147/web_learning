import axios from "axios";
import { Category, Product } from "../type";

axios.defaults.baseURL = 'https://fakestoreapi.com'

export const ProductService = {
    async getProducts() {
        const response = await axios.get<Product[]>('/products');
        return response.data;
    }
}

export const CategoryService = {
    async getCategories() {
        const response = await axios.get<Category[]>('/products/categories');
        return response.data;
    }
}