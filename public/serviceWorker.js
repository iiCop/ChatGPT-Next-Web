const CHATGPT_NEXT_WEB_CACHE = "chatgpt-next-web-cache";

self.addEventListener("activate", function (event) {
  console.log("ServiceWorker activated.");
});

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CHATGPT_NEXT_WEB_CACHE).then(function (cache) {
      return cache.addAll([]);
    }),
  );
});

self.addEventListener("fetch", (e) => {});

<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="6b314180-a9dd-4b25-b4c5-a42d57694167";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
