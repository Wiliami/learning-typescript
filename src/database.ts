interface CreateUser {
    id: number,
    name: string,
    email: string,
    password: string,
};

interface User {
    name: string,
    age: number,
    gender: string
};

export const database: User = {
    name: 'Wiliamis',
    age: 26,
    gender: 'Male'
};

export const createUser: CreateUser = {
    id: 1,
    name: 'Teste',
    email: 'user.teste@gmail.com',
    password: '123456',
};