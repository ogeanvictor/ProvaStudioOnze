import swal from 'sweetalert';
import client from '../client';

function login(payload: any) {
    return client
        .post('user/login', payload)
        .then((response) => {
            console.log(response)
            if (response.data.logged === true) {
                const { token } = response.data;
                localStorage.setItem('auth', response.data.logged);
                localStorage.setItem('token', token);
                client.setAuthToken(token);
                return response.data.logged;
            }
            return swal({
                title: 'Erro ao logar!',
                text: 'Usuário e senha não conferem',
                icon: 'error',
                timer: 2000,
            });
        })
        .catch(() => {
            swal({
                title: 'Erro',
                text: 'Erro ao contatar o servidor, informe o suporte.',
                icon: 'error',
            });
        });
}

export const User = {
    login
}