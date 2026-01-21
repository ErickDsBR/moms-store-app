export interface newProduct {
    id: number;
    name: string;
    price: number;
};
export interface data {
    id: number;
    name: string;
    email: string;
    password?: string;
};

export const userdata: data[] = [
    {
    id: 1,
    name: "Erick Brasil",
    email: "erick@gmail.com",
    password: "123456"    
    }
];
 
