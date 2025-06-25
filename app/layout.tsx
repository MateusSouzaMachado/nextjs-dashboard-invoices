import '@/app/ui/global.css';
<<<<<<< HEAD
import {inter} from '@/app/ui/fonts';
=======
import {inter} from '@/app/ui/font';
>>>>>>> 5568a30ff96c233fea5183c31e1a87a7e5e909b2
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.className} antialiased`}>{children}</body>
=======
      <body className={`${inter.className} antialiased`}>
        {children}</body>
>>>>>>> 5568a30ff96c233fea5183c31e1a87a7e5e909b2
    </html>
  );
}
