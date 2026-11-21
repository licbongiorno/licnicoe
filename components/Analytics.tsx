import Script from "next/script";

/**
 * Solo carga scripts si existe la variable de entorno correspondiente.
 * GA4 se configura sin señales publicitarias ni personalización de anuncios.
 */
export function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <>
      {plausible && <Script defer data-domain={plausible} src="https://plausible.io/js/script.js" strategy="afterInteractive" />}
      {ga && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${ga}', { allow_google_signals: false, allow_ad_personalization_signals: false });
          `}</Script>
        </>
      )}
    </>
  );
}
