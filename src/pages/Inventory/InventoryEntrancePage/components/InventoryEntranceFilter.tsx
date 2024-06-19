import { esEntranceList, esInputFilter } from '@/language';
import { RoutesApplication } from '@/router';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Input, Link } from '@nextui-org/react';

export const InventoryEntranceFilter = () => {
    return (
        <section className='flex flex-col w-full px-5 items-center gap-3 '>
            <section className='w-full md:w-1/2 flex  justify-center items-center'>
                <div className='w-full flex flex-col gap-3'>
                    <Button
                        variant='solid'
                        color='primary'
                        as={Link}
                        href={RoutesApplication.InventoryEntrance.Register}
                        className=' w-full md:w-[15%] '
                        size='md'
                        endContent={
                            <Icon
                                className='text-2xl'
                                icon='solar:add-circle-line-duotone'
                            />
                        }
                    >
                        {esEntranceList.Buton.children}
                    </Button>
                    <div className='flex gap-x-5'>
                        <Input
                            type='text'
                            size='md'
                            placeholder={esInputFilter.placeholder}
                        ></Input>
                        <Button
                            variant='solid'
                            color='primary'
                            size='md'
                            className=' md:w-[15%]'
                            endContent={
                                <Icon
                                    className='text-2xl'
                                    icon='solar:magnifer-line-duotone'
                                />
                            }
                        >
                            {esEntranceList.ButtonFilter.children}
                        </Button>
                    </div>
                </div>
            </section>
        </section>
    );
};
