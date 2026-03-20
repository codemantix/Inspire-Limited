import Head from "next/head";

const SITE_URL = "https://inspireservicesltd.com";
const SITE_NAME = "Inspire Limited";
const DEFAULT_IMAGE = `${SITE_URL}/InspireLogo.svg`;

const defaults = {
  title: "Inspire Limited | Professional Facility Services in Nigeria",
  description:
    "Inspire Limited delivers professional cleaning, facility management, and pest control services across Nigeria. Outsourced personnel, commercial & residential cleaning, and fumigation.",
  image: DEFAULT_IMAGE,
};

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = "website",
  noindex = false,
  jsonLd,
}) {
  const metaTitle = title || defaults.title;
  const metaDescription = description || defaults.description;
  const metaImage = image || defaults.image;
  const metaCanonical = canonical
    ? `${SITE_URL}${canonical}`
    : undefined;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {metaCanonical && <link rel="canonical" href={metaCanonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      {metaCanonical && <meta property="og:url" content={metaCanonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
