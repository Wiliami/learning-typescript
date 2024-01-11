interface User {
    name: string
    age: number
};

interface CreateUser {
    name: string
    email: string
    password: string
    telephone: number
}

function saveUserToDatabase(user: User) {
    console.log(user);
};


saveUserToDatabase({
    name: 'Wiliamis',
    age: 26
});


export function createUser(dataUser: CreateUser) {
    console.log(dataUser);
};


createUser({
    name: 'Wiliamis',
    email: 'oliveirawiliamis34@gmail.com',
    password: '12345678',
    telephone: 99999999
});