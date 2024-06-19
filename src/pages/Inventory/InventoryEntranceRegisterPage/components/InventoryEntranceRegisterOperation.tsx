import { esInventoryEntranceRegisterPage } from '@/language';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
    Button,
    Input,
    Select,
    SelectItem,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from '@nextui-org/react';
import { useState } from 'react';

interface Row {
    id: number;
}
const initialRows: Row[] = [{ id: 1 }];
export const InventoryEntranceRegisterOperation = () => {
    const [rows, setRows] = useState<Row[]>(initialRows);
    const handleAddRow = () => {
        setRows((prev) => [...prev, { id: prev.length + 1 }]);
    };
    const handleRemoveRow = (id: number) => {
        setRows((prev) => prev.filter((row) => row.id !== id));
    };
    return (
        <>
            <Table color='primary' defaultSelectedKeys={['2', '3']}>
                <TableHeader>
                    <TableColumn>
                        {
                            esInventoryEntranceRegisterPage.Operation.headers
                                .Product
                        }
                    </TableColumn>
                    <TableColumn>
                        {
                            esInventoryEntranceRegisterPage.Operation.headers
                                .Demand
                        }
                    </TableColumn>
                    <TableColumn>{''}</TableColumn>
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.id}>
                            <TableCell className='w-1/2'>
                                <Select
                                    variant='underlined'
                                    required
                                    placeholder={
                                        esInventoryEntranceRegisterPage
                                            .Operation.select.placeholder
                                    }
                                >
                                    {[{ label: 'Product1', key: 1 }].map(
                                        (state) => (
                                            <SelectItem key={state.key}>
                                                {state.label}
                                            </SelectItem>
                                        )
                                    )}
                                </Select>
                            </TableCell>
                            <TableCell className='w-1/2'>
                                <Input
                                    variant='underlined'
                                    endContent={
                                        <Icon
                                            className='text-xl'
                                            icon='solar:diagram-up-bold-duotone'
                                        />
                                    }
                                    inputMode='decimal'
                                    type='number'
                                />
                            </TableCell>
                            <TableCell className='w-1/3'>
                                <Button
                                    onClick={() => handleRemoveRow(item.id)}
                                    variant='flat'
                                    color='primary'
                                    isIconOnly
                                >
                                    <Icon
                                        className='text-xl'
                                        icon='solar:trash-bin-trash-line-duotone'
                                    />
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Button
                className='mt-3'
                endContent={
                    <Icon
                        className='text-xl'
                        icon='solar:add-circle-bold-duotone'
                    />
                }
                onClick={handleAddRow}
                variant='flat'
                color='success'
            >
                {esInventoryEntranceRegisterPage.ButtonAddRow.children}
            </Button>
        </>
    );
};
