interface User {
    name: string
    email: string
    password: string
}

class CreateUser {
    user;
    constructor(user: User) {
        this.user = user;
    }

    welcome() {
        console.log(`Dados do usuário: ${JSON.stringify(this.user)}`);
    }
}


const dataUser = new CreateUser({
    name: "Wiliamis",
    email: "wiliamis@gmail.com",
    password: "123"

});
dataUser.welcome();