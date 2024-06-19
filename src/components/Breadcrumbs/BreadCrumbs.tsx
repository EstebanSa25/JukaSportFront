import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useLocation } from 'react-router-dom';

export const BreadCrumbs = () => {
    const location = useLocation();
    return (
        <Breadcrumbs size='lg' className='hidden md:block'>
            {location.pathname.split('/').map(
                (item, index: number) =>
                    index !== 0 && (
                        <BreadcrumbItem
                            key={index}
                            href={`${
                                location.pathname.split(item).at(0) + item
                            }`}
                        >
                            {item}
                        </BreadcrumbItem>
                    )
            )}
        </Breadcrumbs>
    );
};
