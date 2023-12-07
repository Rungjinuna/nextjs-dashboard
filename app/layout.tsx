import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

//Root layout이며 필수
//루트레이아웃에 추가하는 모든 UI는 애플리케이션 모든페이지에서 공유된다.
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
