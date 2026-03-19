export const metadata = {
  title: 'Ata Dental | Orlando & Kissimmee Dentist',
  description: 'State-of-the-art family dentistry serving Orlando since 1989.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}

