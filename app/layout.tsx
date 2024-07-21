import '@/app/ui/global.css'; // @ is an alias for ./ which we can see in tsconfig.json
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

/* template literals allow for embedded expressions and use back ticks. inside a template literal 
 we can embed expressions with ${} 
 
 ${inter.className} will be replaced with the value of inter.className
 
 Tailwinf antialiased class which smooths out the font (adds a nice touch)
 */