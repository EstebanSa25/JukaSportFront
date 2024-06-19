import { Logo, ReversePageButton, UserButton } from '@/components';
import { esCompany, esMenuTitlePage } from '@/language';
import { IconsItems } from './components';

const MenuPage = () => {
    return (
        <>
            <div className='h-[100vh]'>
                <section>
                    <figure className='flex items-center justify-between py-5 mx-3'>
                        <ReversePageButton />
                        <span className='lg:flex hidden items-center '>
                            <Logo className='w-[2.5em]' />
                            <h3 className='font-bold'>{esCompany.name}</h3>
                        </span>
                        <h3 className=' md:hidden font-bold text-center '>
                            {esMenuTitlePage}
                        </h3>
                        <UserButton />
                    </figure>
                </section>
                <div className='flex flex-wrap px-5 gap-3 mt-9 justify-center items-center  lg:px-[15%] md:gap-7'>
                    <IconsItems />
                </div>
                <span className='lg:hidden absolute top-[93%] left-[2%] flex items-center justify-center'>
                    <Logo className='w-[2.5em]' />
                    <h3 className='font-bold'>{esCompany.name}</h3>
                </span>
            </div>
        </>
    );
};
export default MenuPage;
