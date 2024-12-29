/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Poppins } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import { url } from 'inspector';


const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: Use a CSS custom property for better integration
  weight: ['400', '500', '600', '700'],
});

// const helveticaNueue = localFont({
//   src: [
//     {
//       path: './HelveticaNeueBold.otf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './fonts/HelveticaNeueMedium.otf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: './fonts/HelveticaNeueLight.otf',
//       weight: '400',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-helveticaNeue',
// });

export const metadata: Metadata = {
  title: 'VoteCam',
  description: 'Live presidential elections for Cameroon 2025',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
