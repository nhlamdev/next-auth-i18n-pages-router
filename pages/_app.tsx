import '@/hooks/useTranslate';
import { MainCreateLayoutComponent } from '@/layout';
import { store } from '@/redux/store';
import '@/styles/globals.scss';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import i18next from 'i18next';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import { SessionProvider } from 'next-auth/react';
// import io, { Socket } from "socket.io-client";
// import { useEffect } from "react";

export default function App({ Component, pageProps: { session, ...pageProps } }: any) {
    const emotionCache = createCache({ key: 'css' });
    const { layout } = Component;

    // useEffect(() => {
    //   const socket: Socket = io("/services", {
    //     withCredentials: true,
    //   });
    //   socket.on("connect", () => {
    //     console.log("connection!");
    //   });
    // }, []);
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <I18nextProvider i18n={i18next}>
                    <CacheProvider value={emotionCache}>
                        <MainCreateLayoutComponent layout={layout}>
                            <Component {...pageProps} />
                        </MainCreateLayoutComponent>
                    </CacheProvider>
                </I18nextProvider>
            </Provider>
        </SessionProvider>
    );
}
