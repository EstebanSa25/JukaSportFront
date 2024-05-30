import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export const ReversePageButton = () => {
    const navigate = useNavigate();
    return (
        <Button
            className='md:hidden '
            variant='light'
            isIconOnly
            onClick={() => navigate(-1)}
        >
            {' '}
            <Icon
                width={'3em'}
                className='text-primary dark:text-white'
                icon='solar:round-arrow-left-line-duotone'
            />
        </Button>
    );
};
