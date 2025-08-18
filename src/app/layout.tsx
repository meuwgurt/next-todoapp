import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
    title: "뮤구르트 캘린더",
    description: "날짜별로 일정을 기록할 수 있는 도구예용"
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>
                { children }
            </body>
        </html>
    );
};

export default RootLayout;