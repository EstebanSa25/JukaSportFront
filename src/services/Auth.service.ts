import { IFormLogin, User } from '@/models';
import { loadAbort } from '@/utilities';
import JukaSportApi from './JukaSportApi';

export const login = (LoginForm: IFormLogin) => {
    const controller = loadAbort();
    return {
        call: JukaSportApi.post<User>(
            'https://rickandmortyapi.com/api/character/2',
            { ...LoginForm },
            {
                signal: controller.signal,
            }
        ),
        controller,
    };
};
