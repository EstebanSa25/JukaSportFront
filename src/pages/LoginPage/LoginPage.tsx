import { DownloadButton } from '@/components';
import { esFormLogin } from '@/language';
import { FormHead, FormLogin } from './components';

const LoginPage = () => {
    return (
        <>
            <figure className=' px-4 flex flex-col h-[100vh] justify-center items-center'>
                <div className='flex w-full justify-center flex-col items-center '>
                    <div className='flex flex-col items-center gap-5'>
                        <FormHead />
                        <p className=' text-lg '>{esFormLogin.form.title}</p>
                    </div>
                    <FormLogin />
                </div>
            </figure>
            <DownloadButton />
        </>
    );
};
export default LoginPage;
