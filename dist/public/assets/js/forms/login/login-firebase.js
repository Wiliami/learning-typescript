/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-undef */
firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location = "/dashboard";
    }
});

function showLoading() {
    $("#preloader").show();
}

function hideLoading() {
    setTimeout(() => {
        $("#preloder").hide();
    }, 2000);
}

function showError(message) {
    $("#error-message").show();
    $("#error-message").text(message);
}


function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email && password) {
        if(password.length < 6) {
            showError("A senha deve ter pelo menos 6 caracteres.");
            return;
        } else {
            // showLoading();
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // hideLoading();
                console.log("Usuário logado com sucesso.");
            })
            .catch((error) => {
            // hideLoading();
              if(error.code === "auth/invalid-email") {
                showError("Por favor, informe um e-mail válido.");
              } else if(error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                showError("E-mail ou senha incorreta.");
              } else if(error.code.includes("network error")) {
                showError("Erro de rede: Verifique sua conexão com a internet.");
              } else {
                showError("Ocorreu um erro ao efeturar o login");
              }
            });
        }
    } else {
        showError("Preencha os todos os campos.");
    }
}