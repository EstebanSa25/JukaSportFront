import { InventoryHeader } from '@/components';
import { InventoryMenuGrid } from './components';

const InventoryMenuPage = () => {
    return (
        <>
            <InventoryHeader />
            <section className='flex flex-wrap gap-5 items-center   justify-center md:px-[5%] lg:px-[5%] xl:px-[20%] md:gap-7 '>
                <InventoryMenuGrid />
            </section>
        </>
    );
};
export default InventoryMenuPage;
