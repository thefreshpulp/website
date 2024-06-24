import { FC } from "react";
import Head from "next/head";

interface SEOProps {
  pageTitle: string;
  pageDescription: string;
}

const SEO: FC<SEOProps> = ({ pageTitle, pageDescription }) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    {/* Other SEO-related meta tags can be added here */}
  </Head>
);

export default SEO;
