import { esIconsMenu } from '@/language';
import { IconMenu } from './IconMenu';
import { Icon } from '@iconify/react/dist/iconify.js';
import { RoutesApplication } from '@/router';

export const IconsItems = () => {
    return (
        <>
            <IconMenu
                Text={esIconsMenu.Users.title}
                Description={esIconsMenu.Users.description}
                Image={
                    <Icon
                        className='text-primary dark:text-white group-hover:text-secondary transition-all'
                        width={'5em'}
                        icon='solar:user-bold-duotone'
                    />
                }
                Link={RoutesApplication.MenuIcons.Users}
            />
            <IconMenu
                Text={esIconsMenu.Inventory.title}
                Description={esIconsMenu.Inventory.description}
                Image={
                    <Icon
                        className='text-primary dark:text-white group-hover:text-secondary transition-all'
                        width={'5em'}
                        icon='solar:layers-bold-duotone'
                    />
                }
                Link={RoutesApplication.MenuIcons.Inventory}
            />
            <IconMenu
                Text={esIconsMenu.Sales.title}
                Description={esIconsMenu.Sales.description}
                Image={
                    <Icon
                        className='text-primary dark:text-white group-hover:text-secondary transition-all'
                        width={'5em'}
                        icon='solar:chart-bold-duotone'
                    />
                }
                Link={RoutesApplication.MenuIcons.Sales}
            />
            <IconMenu
                Text={esIconsMenu.Payroll.title}
                Description={esIconsMenu.Payroll.description}
                Image={
                    <Icon
                        className='text-primary   dark:text-white group-hover:text-secondary transition-all'
                        width={'5em'}
                        icon='solar:users-group-rounded-bold-duotone'
                    />
                }
                Link={RoutesApplication.MenuIcons.Payroll}
            />
            <IconMenu
                Text={esIconsMenu.Bills.title}
                Description={esIconsMenu.Bills.description}
                Image={
                    <Icon
                        className='text-primary dark:text-white  group-hover:text-secondary transition-all '
                        width={'5em'}
                        icon='solar:bill-list-line-duotone'
                    />
                }
                Link={RoutesApplication.MenuIcons.Bills}
            />
            <IconMenu
                Text={esIconsMenu.Configuration.title}
                Description={esIconsMenu.Configuration.description}
                Image={
                    <Icon
                        className='text-primary dark:text-white group-hover:text-secondary transition-all'
                        width={'5em'}
                        icon='solar:settings-minimalistic-bold-duotone'
                    />
                }
                Link={RoutesApplication.MenuIcons.Configuration}
            />
        </>
    );
};
