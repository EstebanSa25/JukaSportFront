import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RoutesApplication } from './Routes';

import { LoaderLogo, ThemeButton } from '@/components';
import { useTheme } from 'next-themes';
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('@/pages/404/NotFoundPage'));
const MenuPage = lazy(() => import('@/pages/MenuPage/MenuPage'));

export const AppRouter = () => {
    const { theme } = useTheme();
    const location = useLocation();
    useEffect(() => {
        const metaThemeColor = document.querySelector(
            'meta[name="theme-color"]'
        );
        if (metaThemeColor) {
            metaThemeColor.setAttribute(
                'content',
                theme === 'light' ? '#ffffff' : '#000000'
            );
        }
        console.log(location.pathname);
    }, [theme]);
    return (
        <>
            <Suspense fallback={<LoaderLogo />}>
                <Routes>
                    <Route
                        path={RoutesApplication.BaseUrl}
                        element={<LoginPage />}
                    />
                    <Route
                        path={RoutesApplication.UrlNotFound}
                        element={<NotFoundPage />}
                    />
                    <Route
                        path={RoutesApplication.Menu}
                        element={<MenuPage />}
                    />
                </Routes>
            </Suspense>

            <ThemeButton />
        </>
    );
};
