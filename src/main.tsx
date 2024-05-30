import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './redux/store.ts';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import App from './App.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <NextUIProvider>
                <NextThemesProvider attribute='class' defaultTheme='light'>
                    <App />
                </NextThemesProvider>
            </NextUIProvider>
        </Provider>
    </React.StrictMode>
);
