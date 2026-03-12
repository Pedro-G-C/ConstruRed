
export const metadata = {
  title: 'ConstruRed',
  description: 'App de administración de obras'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{margin:0,fontFamily:'Arial'}}>
        {children}
      </body>
    </html>
  )
}
