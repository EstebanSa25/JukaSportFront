import { useEffect, useState } from 'react';

export const useInstallApplication = () => {
    const [isReadyForInstall, setIsReadyForInstall] = useState(false);
    const [deferredPrompt, setDeferredPrompt] =
        useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        const handler = (event: Event) => {
            // Ensure the event is of type BeforeInstallPromptEvent
            const promptEvent = event as BeforeInstallPromptEvent;
            event.preventDefault();
            setDeferredPrompt(promptEvent);
            setIsReadyForInstall(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const downloadApp = async () => {
        if (!deferredPrompt) {
            console.log('No prompt event stored');
            return;
        }

        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        console.log('User choice:', result);

        setDeferredPrompt(null);
        setIsReadyForInstall(false);
    };

    return { isReadyForInstall, downloadApp };
};

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}
