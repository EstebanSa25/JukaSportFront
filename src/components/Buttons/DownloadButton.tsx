import { useInstallApplication } from '@/hooks';
import { ButtonDownload } from '@/language';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export const DownloadButton = () => {
    const { isReadyForInstall, downloadApp } = useInstallApplication();
    const mediaqueryList = window.matchMedia('(min-width: 1024px)');
    const { theme } = useTheme();
    return (
        <>
            {isReadyForInstall && (
                <Tooltip content={ButtonDownload.content}>
                    <Button
                        variant='light'
                        size='lg'
                        endContent={
                            <>
                                {mediaqueryList.matches ? (
                                    <Icon
                                        width='1.3em'
                                        icon='ic:baseline-install-desktop'
                                    />
                                ) : (
                                    <Icon
                                        width='1.3em'
                                        icon='ic:baseline-install-mobile'
                                    />
                                )}
                            </>
                        }
                        className='fixed top-[92.8vh] left-[calc(0%+2em)] hover:-translate-y-1  '
                        onClick={downloadApp}
                        color={theme == 'dark' ? 'default' : 'primary'}
                    >
                        {ButtonDownload.children}
                    </Button>
                </Tooltip>
            )}
        </>
    );
};
