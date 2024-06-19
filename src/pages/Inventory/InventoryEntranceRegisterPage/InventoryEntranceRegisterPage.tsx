import { InventoryHeader } from '@/components';
import {
    InventoryEntranceRegisterHeader,
    InventoryEntranceRegisterTabs,
} from './components';

const InventoryEntranceRegisterPage = () => {
    return (
        <>
            <InventoryHeader />
            <section className='mt-5 ml-5 w-[90%] p-5 border flex flex-col gap-y-5'>
                <InventoryEntranceRegisterHeader />
                <InventoryEntranceRegisterTabs />
            </section>
        </>
    );
};
export default InventoryEntranceRegisterPage;
