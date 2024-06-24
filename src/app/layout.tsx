import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
