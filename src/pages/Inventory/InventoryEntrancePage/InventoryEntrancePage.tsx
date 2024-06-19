import { InventoryHeader } from '@/components';
import { InventoryEntranceFilter, InventoryEntranceTable } from './components';

const InventoryEntrancePage = () => {
    return (
        <>
            <InventoryHeader />
            <section className='flex flex-col px-5 gap-y-8'>
                <InventoryEntranceFilter />
                <InventoryEntranceTable />
            </section>
        </>
    );
};

export default InventoryEntrancePage;
