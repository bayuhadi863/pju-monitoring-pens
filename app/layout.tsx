// next js import
import type { Metadata } from 'next';
// font import
import { Poppins } from 'next/font/google';
// css import
import './globals.css';
// mantine import
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

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
        <ColorSchemeScript />
      </head>
      <body className={poppins.className}>
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
