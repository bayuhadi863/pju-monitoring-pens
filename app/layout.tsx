import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PJU Monitoring System PENS',
  description: 'Website untuk memonitoring PJU di PENS',
};

const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    blue: ['#eaf1ff', '#d5dffd', '#a9bbf3', '#7b95e9', '#5475e1', '#3a61dd', '#2c57db', '#1d48c3', '#1440af', '#01369c'],
  },
  white: '#ffffff',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body className={inter.className}>
        <MantineProvider
          theme={theme}
          defaultColorScheme='auto'
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
