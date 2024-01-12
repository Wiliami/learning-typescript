interface User {
    name: string
    age: number
    gender: string
}

interface CreateUser {
    id: number
    name: string
    email: string
    password: string
}

interface ListUser {
    name: string
    age: number
    gender: string
    salary: number
    status: string
}


export function listUsers(user: ListUser) {
    return user;
}

listUsers({
    name:'Wiliamis',
    age: 26,
    gender:'Masculino',
    salary: 1412,
    status: 'Ativo'
});


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