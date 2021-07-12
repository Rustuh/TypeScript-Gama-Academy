interface Usuario {
    nome: string;
    email: string;
    endereço?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Rustuh',
        email: 'ola@ola.com'
    }
}

function setUser(usuario: Usuario){
    //....
}