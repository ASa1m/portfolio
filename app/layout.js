/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import 'react-tippy/dist/tippy.css';
import Head from "next/head";
// import "tailwindcss/tailwind.css";

export const metadata = {
  applicationName: "Abdullah Saim",
  keywords: [
    "Abdullah Saim",
    "abdullah saim",
    "freelancers",
    "react developer",
    "reactjs freelancer",
    "nextjs",
    "photography",
    "videography",
    "abdullah",
    "saim",
    "Computer Scientist",
    "Developer"
  ],
  title: "Abdullah Saim - Computer Scientist, Developer and Creator.",
  description:
    "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.",
  alternates: {
    canonical: "https://asaim.netlify.app/"
  },
  metadataBase: new URL("https://asaim.netlify.app/"),
  openGraph: {
    title: "Abdullah Saim - Computer Scientist, Developer and Creator.",
    description:
      "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects ",
    url: "https://asaim.netlify.app",
    siteName: "Abdullah Saim",
    images: [
      {
        url: "https://asaim.netlify.app/static/misc/og.png",
        alt: "Abdullah Saim"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: [
      { rel: "icon", url: "/static/favicon/favicon.ico" },
      {
        rel: "icon",
        url: "/static/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
      {
        rel: "icon",
        url: "/static/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        rel: "icon",
        url: "/static/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      }
    ],
    shortcut: ["/static/favicon/favicon.ico"],
    apple: [
      {
        url: "/static/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  },
  manifest: "/static/favicon/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Saim - Computer Scientist, Developer and Creator.",
    description:
      "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.",
    url: "https://asaim.netlify.app",
    images: {
      url: "https://asaim.netlify.app/static/misc/og.png",
      alt: "Abdullah Saim"
    }
  }
};
export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href={"/static/favicon/favicon.ico"}
          sizes="16x16"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','G-4H4HEZKQT1');`
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4H4HEZKQT1', {
                page_path: window.location.pathname,
              });
          `
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
