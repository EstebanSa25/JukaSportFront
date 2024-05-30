import { esNotFoundPage } from '@/language';
import { Button } from '@nextui-org/react';
import { Logo } from '../Icons';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className='flex flex-col h-[100vh] justify-center items-center'>
            <figure className='flex flex-col items-center justify-center gap-5 '>
                <h1 className=' text-9xl font-[800]'>{esNotFoundPage.title}</h1>
                <p className='font-[600] '>{esNotFoundPage.message}</p>
                <Button
                    size='lg'
                    onClick={() => navigate(-1)}
                    color='primary'
                    className='w-1/2'
                >
                    {esNotFoundPage.button}
                </Button>
                <Logo className=' fixed w-[4em] top-[90%]' />
            </figure>
        </section>
    );
};
