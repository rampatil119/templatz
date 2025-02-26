import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { LetterDataProvider } from "./utils/letterContext";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];
// export async function loader() {

//   return Response.json({
//     ENV: {
//       STRIPE_PUBLIC_KEY:"MY_SECRET",
//       FAUNA_DB_URL: "FAUNA_DB_URL",
//     },
//   });
// }
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <LetterDataProvider>{children}</LetterDataProvider>
        <ScrollRestoration />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(
              data.ENV
            )}`,
          }}
        /> */}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
