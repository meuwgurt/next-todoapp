import type { Metadata } from 'next';
import ThemeProvider from '@/components/providers/theme';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
    title: "뮤구르트 캘린더",
    description: "날짜별로 해야할 일을 기록할 수 있는 도구"
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    { children }
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;