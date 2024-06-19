import { Tab, Tabs, Textarea } from '@nextui-org/react';
import { InventoryEntranceRegisterOperation } from './InventoryEntranceRegisterOperation';
import { esInventoryEntranceRegisterPage } from '@/language';

export const InventoryEntranceRegisterTabs = () => {
    return (
        <Tabs aria-label='Dynamic tabs'>
            <Tab title={esInventoryEntranceRegisterPage.Tabs.Operation}>
                <InventoryEntranceRegisterOperation />
            </Tab>
            <Tab title={esInventoryEntranceRegisterPage.Tabs.Detail}>
                <Textarea
                    variant='bordered'
                    label={esInventoryEntranceRegisterPage.Detail.label}
                    placeholder={
                        esInventoryEntranceRegisterPage.Detail.placeholder
                    }
                />
            </Tab>
        </Tabs>
    );
};
