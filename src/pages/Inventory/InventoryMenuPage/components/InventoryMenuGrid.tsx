import { IconMenu } from '@/components';
import { esMenuInventory } from '@/language';
import { RoutesApplication } from '@/router';
import { Icon } from '@iconify/react/dist/iconify.js';
interface I_CARD {
    icon: string;
    title: string;
    description: string;
    link: string;
}
const Cards: I_CARD[] = [
    {
        icon: 'solar:list-down-line-duotone',
        title: esMenuInventory.Entrace.Title,
        description: esMenuInventory.Entrace.Description,
        link: RoutesApplication.MenuInventory.Entrance,
    },
    {
        icon: 'solar:list-up-line-duotone',
        title: esMenuInventory.Output.Title,
        description: esMenuInventory.Output.Description,
        link: '',
    },
    {
        icon: 'solar:box-line-duotone',
        title: esMenuInventory.Products.Title,
        description: esMenuInventory.Products.Description,
        link: '',
    },
    {
        icon: 'solar:document-text-line-duotone',
        title: esMenuInventory.Reports.Title,
        description: esMenuInventory.Reports.Description,
        link: '',
    },
];
export const InventoryMenuGrid = () => {
    return (
        <>
            {Cards.map((card, index) => (
                <IconMenu
                    key={index}
                    Text={card.title}
                    className='w-[16em] h-[7em] md:w-[25em] md:h-[12em] animate-fade-in animate-delay-100'
                    Image={
                        <Icon
                            className='text-primary dark:text-white group-hover:text-secondary transition-all'
                            width={'5em'}
                            icon={card.icon}
                        />
                    }
                    Link={card.link}
                    Description={card.description}
                />
            ))}
        </>
    );
};
