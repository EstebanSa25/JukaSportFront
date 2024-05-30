import { IFormLogin } from '@/models';
import useFetchAndLoad from '../useFetchAndLoad';
import { useNavigate } from 'react-router-dom';
import { RoutesApplication } from '@/router';

export const useAuth = () => {
    const { loading /*, callEndpoint*/ } = useFetchAndLoad();
    const navigate = useNavigate();
    const startLogin = async (form: IFormLogin) => {
        console.log({ ...form });

        // await callEndpoint(login(form));
    };
    const startLogout = async () => {
        navigate(RoutesApplication.BaseUrl);
    };
    return { startLogin, startLogout, loading };
};
