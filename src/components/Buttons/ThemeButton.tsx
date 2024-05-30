import { Button, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { ButtonThemeMode } from '@/language';
import { MoonIcon, SunIcon } from '../Icons';

export const ThemeButton = () => {
    const { setTheme, theme } = useTheme();
    return (
        <Tooltip
            content={`${ButtonThemeMode.content} ${
                theme == 'dark'
                    ? `${ButtonThemeMode.light}`
                    : `${ButtonThemeMode.dark}`
            }`}
        >
            <Button
                className=' fixed top-[93vh] left-[calc(100%-5em)] '
                isIconOnly
                onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
                color={theme == 'dark' ? 'default' : 'primary'}
                variant='bordered'
            >
                {theme == 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
        </Tooltip>
    );
};
