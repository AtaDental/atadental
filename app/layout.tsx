export const metadata = {
  title: 'Ata Dental | Orlando & Kissimmee Dentist',
  description: 'State-of-the-art family dentistry serving Orlando since 1989.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
        {/* Cherry Financing sticky widget */}
        <a
          href="/financing"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 9999,
            background: "#c41230",
            color: "white",
            textDecoration: "none",
            borderRadius: 50,
            padding: "12px 20px",
            fontSize: 13,
            fontWeight: 700,
            fontFamily: "'Libre Franklin', 'Segoe UI', sans-serif",
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            lineHeight: 1.3,
          }}
        >
          <span style={{ fontSize: 18 }}>🍒</span>
          <span>Pay over time<br /><span style={{ fontWeight: 400, fontSize: 11, opacity: 0.9 }}>No hard credit checks · 0% APR options</span></span>
        </a>
      </body>
    </html>
  )
}
