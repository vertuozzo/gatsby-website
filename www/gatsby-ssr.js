import React from "react";
import { oneLine } from "common-tags"
export const onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
}) => {
  setHeadComponents([
    <link
      rel="preconnect dns-prefetch"
      key="yandex-metrika-preconnect-dns-prefetch"
      href="https://mc.yandex.ru"
	/>,
    <link
      rel="preconnect dns-prefetch"
      key="google-tag-manager-preconnect-dns-prefetch"
      href="https://www.googletagmanager.com"
	/>,
    <meta
      key="yandex-verification"
      name="yandex-verification"
      content="e93f3cc747693c58"
    />,
    <meta
      key="google-site-verification"
      name="google-site-verification"
      content="q-zkxfeC1fhRemHVhGhFtpeuQvk6fF6a4IfaFV_UwaI"
    />,
    <script
      key="yandex-metrika-script"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: oneLine`
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(52089519, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true
  });
   	  `
      }}
    />,
    <script 
      async={true}
      key="gtag-script"
      type="text/javascript"
      src="https://www.googletagmanager.com/gtag/js?id=UA-133299923-1"
    />,
    <script
      key="gtag-config-script"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: oneLine`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-133299923-1');
   	  `
      }}
    />,
    <script
      key="gtm-script"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: oneLine`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NHCFWN7');
   	  `
      }}
    />,	
  ])
  setPreBodyComponents([
    <noscript
      key="yandex-metrika-noscript"
      dangerouslySetInnerHTML={{
        __html: `<div><img src="https://mc.yandex.ru/watch/52089519" style="position:absolute; left:-9999px;" alt="" /></div>`
      }}
    />,
    <noscript
      key="google-tag-manager-noscript"
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHCFWN7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}
    />,
  ])
}