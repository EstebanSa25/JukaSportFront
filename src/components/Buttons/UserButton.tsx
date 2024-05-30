import { useAuth } from '@/hooks';
import { esUserButton } from '@/language';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@nextui-org/react';

export const UserButton = () => {
    const { startLogout } = useAuth();
    return (
        <Dropdown placement='bottom-end' backdrop='blur'>
            <DropdownTrigger>
                <Button
                    isIconOnly
                    radius='full'
                    variant='bordered'
                    color='primary'
                    className='  border-primary/60  text-lg font-semibold'
                >
                    N
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                    <p className='font-semibold'>{esUserButton.children}</p>
                    <p className='font-semibold'>correo@example.com</p>
                </DropdownItem>
                <DropdownItem
                    startContent={
                        <Icon
                            className='text-primary text-2xl'
                            icon='solar:settings-bold-duotone'
                        />
                    }
                    key='settings'
                >
                    {esUserButton.Settings}
                </DropdownItem>
                <DropdownItem
                    onClick={() => startLogout()}
                    className='group'
                    startContent={
                        <Icon
                            className='text-primary text-2xl group-hover:text-danger'
                            icon='solar:logout-2-bold-duotone'
                        />
                    }
                    key='logout'
                    color='danger'
                >
                    {esUserButton.Logout}
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
