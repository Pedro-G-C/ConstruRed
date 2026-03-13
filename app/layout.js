export const metadata = {
  title: 'ConstruRed',
  description: 'App web básica para administrar obras'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#f3f4f6' }}>
        {children}
      </body>
    </html>
  )
}
