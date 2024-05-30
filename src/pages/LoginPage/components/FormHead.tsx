import { Logo } from '@/components';
import { esCompany } from '@/language';

export const FormHead = () => {
    return (
        <div className='flex gap-x-3 items-center justify-start     '>
            <Logo className='w-[3em] fill-DarkPrimary ' />
            <h1 className=' font-bold  text-3xl'>{esCompany.name}</h1>
        </div>
    );
};
