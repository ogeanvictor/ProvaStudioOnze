import swal from 'sweetalert';
import client from "../client";

const getAll = async () => {
    return await client.get('company/')
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        return swal({
            title: 'Erro!',
            text: response.message,
            icon: 'error',
        });
      }).catch(() => {
        swal({
            title: 'Erro',
            text: 'Erro ao contatar o servidor, informe o suporte.',
            icon: 'error',
        });
      });
  }

function get(id: string) {
    return client.get(`company/${id}`)
      .then((response) => response.data)
      .catch((err) => err);
  }
  
  function post(payload: any) {
    return client.post('company/', payload)
      .then((response) => {
        if (response.status === 200) {
          return swal({
            title: 'Empresa adicionada!',
            text: 'Empresa adicionada com sucesso',
            icon: 'success',
          });
        }
        return swal({
            title: 'Erro!',
            text: response.message,
            icon: 'error',
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
  
function put(payload: any) {
    return client.put('company/', payload)
        .then((response) => {
            if (response.data) {
                return swal({
                    title: 'Empresa atualizada!',
                    text: 'Empresa atualizada com sucesso',
                    icon: 'success',
                });
            }
            return swal({
                title: 'Erro!',
                text: response.message,
                icon: 'error',
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

function remove(id: string) {
    return client.remove(`company/${id}`)
        .then((response) => {
            if (response.status === 200) {
                return swal({
                    title: 'Empresa deletada!',
                    text: 'Empresa deletada com sucesso',
                    icon: 'success',
                });
            }
            return swal({
                title: 'Erro!',
                text: response.message,
                icon: 'error',
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

export const Company = {
    get,
    getAll, 
    post,
    put,
    remove
};