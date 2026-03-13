export const metadata = {
  title: "ConstruRed",
  description: "App de administración de obras",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
