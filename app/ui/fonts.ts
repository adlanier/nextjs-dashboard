import { Inter } from 'next/font/google'; // primary font
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin']}); // specify what subset to load. ie latin
export const lusitana = Lusitana({ weight: ["400" , "700"],
    subsets: ['latin'],
})