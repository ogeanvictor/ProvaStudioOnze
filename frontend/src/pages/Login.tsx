import { useState, ChangeEvent, useEffect } from 'react';
import {
  Button, 
  TextField, 
  Typography,
  FormControl
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { User } from '../api/services/User';

interface UserState {
    username: string,
    password: string
}

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserState>({username: '', password: ''});

    useEffect(() => {
        if (
          localStorage.getItem('auth')
          && localStorage.getItem('webUserId')
          && localStorage.getItem('token')
        ) {
          navigate('/login');
        }
      }, []);

    function handleUsername(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            username: e.target.value
        });
    };

    function handlePassword(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            password: e.target.value
        });
    };

    function handleSubmit(event: any) {
        console.log(event)
        event.preventDefault();
        const payload = {
            username: user.username,
            password: user.password,
        };

        if (user.username && user.password) {
            User.login(payload).then((logged) => {
                if (logged) {
                    navigate('/company');
                }
            });
        };
    };

    return (
        <div className="w-full mt-10 flex flex-col p-4 items-center justify-center color-white">

            <FormControl component="form" className="w-96 p-9 rounded-lg text-blueGreen items-center text-center" onSubmit={handleSubmit}>
                <Typography variant='h2' className='text-center pb-9'>Login</Typography>
                    <p className='my-10'>Faça o login com seu usuário e senha!</p>
                    
                    <TextField 
                        fullWidth
                        required
                        onChange={handleUsername}
                        placeholder="Insira seu Usuário"
                        inputProps={{ style: { color: 'white'}}}
                        style={{ backgroundColor: '#224957', border: 'none', cursor: 'pointer', boxShadow: 'initial', borderRadius: 6, width: '320px', marginBottom: '32px' }}
                        value={user.username || ''}
                        variant="outlined"
                    />
                
                    <TextField 
                        fullWidth
                        type='password'
                        required
                        onChange={handlePassword}
                        placeholder="Insira sua Senha"
                        inputProps={{ style: { color: 'white'}}}
                        style={{ backgroundColor: '#224957', border: 'none', cursor: 'pointer', boxShadow: 'initial', borderRadius: 6, width: '320px', marginBottom: '32px' }}
                        value={user.password || ''}
                        variant="outlined"
                    />

                <Button 
                    type='submit' 
                    className='w-80 rounded-md h-12 flex items-center justify-center font-medium leading-4 duration-500 cursor-pointer border-none bg-green hover:bg-greenDark hover:text-white'
                >
                    LOGIN
                </Button>
            </FormControl>
        </div>
    )
}

export default Login