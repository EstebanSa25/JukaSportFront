import { esInventoryEntranceRegisterPage } from '@/language';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
    Button,
    DatePicker,
    Input,
    Select,
    SelectItem,
} from '@nextui-org/react';

const state = [
    { key: 1, label: 'Recibido' },
    { key: 2, label: 'Pendiente' },
];

export const InventoryEntranceRegisterHeader = () => {
    return (
        <>
            <section className='w-full flex justify-between items-center'>
                <h2 className='font-semibold'>
                    {esInventoryEntranceRegisterPage.Title}
                </h2>
                <Button color='primary' size='md'>
                    {esInventoryEntranceRegisterPage.ButtonCreate.children}
                </Button>
            </section>

            <div className='flex flex-col lg:flex-row lg:justify-around lg:items-center gap-4'>
                <section className='flex flex-col gap-4  lg:items-center'>
                    <div className='flex items-center gap-4'>
                        <p className='w-24'>
                            {
                                esInventoryEntranceRegisterPage.Header.Recive
                                    .label
                            }
                        </p>
                        <Input
                            className='max-w-xs'
                            color='default'
                            variant='underlined'
                        />
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='w-24'>
                            {
                                esInventoryEntranceRegisterPage.Header
                                    .Operationtype.label
                            }
                        </p>
                        <p>
                            {
                                esInventoryEntranceRegisterPage.Header
                                    .Operationtype.value
                            }
                        </p>
                    </div>
                </section>

                <section className='flex flex-col gap-4 w-full lg:w-auto'>
                    <div className='flex items-center gap-4'>
                        <p className='w-24'>
                            {esInventoryEntranceRegisterPage.Header.Date.label}
                        </p>
                        <DatePicker
                            endContent={
                                <Icon
                                    className='text-2xl'
                                    icon='solar:calendar-add-bold-duotone'
                                />
                            }
                            variant='underlined'
                            label={
                                esInventoryEntranceRegisterPage.Header.Date
                                    .label
                            }
                            className='max-w-xs'
                        />
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='w-24'>
                            {esInventoryEntranceRegisterPage.Header.State.label}
                        </p>
                        <Select
                            variant='underlined'
                            required
                            label={
                                esInventoryEntranceRegisterPage.Header.State
                                    .labelOption
                            }
                            placeholder={
                                esInventoryEntranceRegisterPage.Header.State
                                    .label
                            }
                            className='max-w-xs'
                        >
                            {state.map((state) => (
                                <SelectItem
                                    startContent={
                                        <Icon
                                            className='text-xl'
                                            icon={`solar:${
                                                state.label.includes('Recibido')
                                                    ? 'check-read-line-duotone'
                                                    : 'danger-square-line-duotone'
                                            }`}
                                        />
                                    }
                                    key={state.key}
                                >
                                    {state.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                </section>
            </div>
        </>
    );
};
