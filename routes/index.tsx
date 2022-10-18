import { Head } from "$fresh/runtime.ts";
import AddProject from "../islands/Wish.tsx";
import { PageProps } from "$fresh/server.ts";

export default function NewProject({ url }: PageProps<null>) {
  return (
    <>
      <Head>
        <title>Happy Diwali Wishes Greeting Generator</title>
        <meta
          name="description"
          content="Create Happy Diwali Greeting Wishes with Name in image."
        />
        <link rel="canonical" href={url.href} />
        <link rel="stylesheet" href="/app.css" />
        <meta
          property="og:title"
          content="Happy Diwali Wishes Greeting Generator"
        />
        <meta
          property="og:description"
          content="Create Happy Diwali Greeting Wishes with Name in image."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url.href} />
        <meta
          property="og:image"
          content="https://images.weserv.nl/?url=https://img.sanweb.info/dw/dw?name=Your-Name"
        />
        <meta property="og:image:alt" content="Happy Diwali" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/icons/favicon-196.png"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/icons/favicon.ico"
        />
        <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Happy Diwali" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Happy Diwali" />
        <link
          rel="preconnect"
          href="https://images.weserv.nl/"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://img.sanweb.info/"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <div class="min-h-screen px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-gray-200">
        <div class="max-w-lg mx-auto">
          <img
            src="https://images.weserv.nl/?url=https://img.sanweb.info/dw/dw?name=Your-Name"
            alt="Happy Diwali"
          />
          <AddProject />
        </div>
      </div>
    </>
  );
}
