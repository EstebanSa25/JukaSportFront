import { esIconsMenu } from '@/language';
import { Icon } from '@iconify/react/dist/iconify.js';
import { BreadCrumbs } from '../Breadcrumbs';
import { ReversePageButton, UserButton } from '../Buttons';

export const InventoryHeader = () => {
    return (
        <section className='flex justify-between p-5'>
            <ReversePageButton />
            <div className='flex flex-col justify-center items-left'>
                <figure className='items-center gap-3 hidden md:flex'>
                    <Icon
                        className='text-primary dark:text-white group-hover:text-secondary transition-all'
                        width={'5em'}
                        icon='solar:layers-bold-duotone'
                    />
                    <h2 className='text-xl'>{esIconsMenu.Inventory.title}</h2>
                </figure>
                <BreadCrumbs />
            </div>

            <UserButton />
        </section>
    );
};
