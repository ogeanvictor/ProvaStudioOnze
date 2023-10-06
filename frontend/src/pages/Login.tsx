import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

//MUI Material
import {
    Button, 
    TextField, 
    Typography,
    FormControl
} from '@mui/material';

import { User } from '../api/services/User';

interface UserState {
    username: string,
    password: string
}

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserState>({username: '', password: ''});

    const handleChange = (e: ChangeEvent<HTMLInputElement>, field: keyof UserState) => {
        setUser((prevUser) => ({ ...prevUser, [field]: e.target.value }));
      };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const payload = {
            username: user.username,
            password: user.password,
        };

        await User.login(payload).then((logged) => {
            if (logged) {
                navigate('/company');
            }
        });
    
    };

    return (
        <div className="w-full mt-10 flex flex-col p-4 items-center justify-center color-white">

            <FormControl component="form" className="w-96 p-9 rounded-lg text-blueGreen items-center text-center" onSubmit={handleSubmit}>
                <Typography variant='h2' className='text-center pb-9'>Login</Typography>
                    <p className='my-10'>Faça o login com seu usuário e senha!</p>
                    
                    <TextField 
                        fullWidth
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'username')}
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'password')}
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