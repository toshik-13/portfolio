// app/layout.tsx or app/layout.js

export const metadata = {
  title: 'My Portfolio',
  description: 'Toshik Audichya\'s Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
