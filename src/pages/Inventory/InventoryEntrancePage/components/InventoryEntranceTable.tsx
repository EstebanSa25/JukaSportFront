import { esInventoryEntrancePage } from '@/language';
import {
    Link,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from '@nextui-org/react';
import { useState } from 'react';

const dataExample = [
    { id: 1, entrance: 'REC-1', date: '2023-02-03', provider: 'Proveedor 1' },
    {
        id: 2,
        entrance: 'REC-2',
        date: '2021-09-04',
        provider: 'Proveedor 2',
    },
    {
        id: 3,
        entrance: 'REC-3',
        date: '2021-05-05',
        provider: 'Proveedor 3',
    },
    {
        id: 4,
        entrance: 'REC-4',
        date: '2021-09-06',
        provider: 'Proveedor 4',
    },
];

export const InventoryEntranceTable = () => {
    const [page, setPage] = useState<number>(1);
    const rowsPerPage: number = 2;
    const pages = Math.ceil(50 / rowsPerPage);
    return (
        <Table
            className='md:w-[90%] mx-auto'
            aria-label='Example static collection table'
            bottomContent={
                <div className='flex w-full justify-center'>
                    <Pagination
                        loop /* Lista */
                        siblings={1}
                        isCompact
                        showControls
                        color='primary'
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }
        >
            <TableHeader>
                <TableColumn>
                    {esInventoryEntrancePage.Headers.Entraces}
                </TableColumn>
                <TableColumn>
                    {esInventoryEntrancePage.Headers.Date}
                </TableColumn>
                <TableColumn>
                    {esInventoryEntrancePage.Headers.Provider}
                </TableColumn>
            </TableHeader>
            <TableBody>
                {dataExample.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>
                            <Link isExternal showAnchorIcon href={row.entrance}>
                                {row.entrance}
                            </Link>{' '}
                        </TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.provider}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
