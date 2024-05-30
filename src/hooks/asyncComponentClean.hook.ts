/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

export const useAsync = (
    asyncFn: () => Promise<AxiosResponse<any, any>>,
    successFunction: Function,
    returnFunction: Function,
    dependencies: any[] = []
) => {
    useEffect(() => {
        let isActive = true;
        asyncFn().then((result) => {
            if (isActive) successFunction(result.data);
        });
        return () => {
            returnFunction && returnFunction();
            isActive = false;
        };
    }, dependencies);
};
