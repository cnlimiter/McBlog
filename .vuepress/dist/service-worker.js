/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "faa9fb986610895438b2900d6281ad62"
  },
  {
    "url": "afdian.png",
    "revision": "4eb0591a2b72283717a117f2fb216689"
  },
  {
    "url": "ali.png",
    "revision": "34396da8311095bcf9ec51605d512d54"
  },
  {
    "url": "alipay.png",
    "revision": "bca77f7cad38ac92553faaab2b575147"
  },
  {
    "url": "assets/css/0.styles.2a9c2d6c.css",
    "revision": "6e13afc70c3728dd74f5a69541186f29"
  },
  {
    "url": "assets/img/1.2388a0f3.png",
    "revision": "2388a0f347287df240082990e68bf5b8"
  },
  {
    "url": "assets/img/2.c7ed3610.png",
    "revision": "c7ed3610ed00d8a29e9048ab41f92610"
  },
  {
    "url": "assets/img/3.56efea7a.png",
    "revision": "56efea7ad861755aaf42abedeaed00a7"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bg.a382c67a.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "assets/img/myicon.807e5b10.svg",
    "revision": "807e5b10e21985f8e8c8c997871c01a6"
  },
  {
    "url": "assets/js/1.6c22848f.js",
    "revision": "39d1ed6c9f3c73a06f9f8fdf361dc88d"
  },
  {
    "url": "assets/js/10.6b11ea22.js",
    "revision": "83fb6335443b467488b3461688beb1dd"
  },
  {
    "url": "assets/js/11.656caa41.js",
    "revision": "fea9c0688c1932ccda76c797980475e5"
  },
  {
    "url": "assets/js/12.58f8d258.js",
    "revision": "191eb7bb878e4003989c6fa331f5adc4"
  },
  {
    "url": "assets/js/13.04868091.js",
    "revision": "28b7871f7af9014f0c47724a9a45340c"
  },
  {
    "url": "assets/js/14.be3e63c6.js",
    "revision": "7490e5b34d42e276af5a761019c470c7"
  },
  {
    "url": "assets/js/15.8d210ae2.js",
    "revision": "8b79801c7596361095faedc595f0bd64"
  },
  {
    "url": "assets/js/16.b31912c6.js",
    "revision": "366d0cd90f4a7924c83416a2cf3f4b67"
  },
  {
    "url": "assets/js/17.40d569ef.js",
    "revision": "b33cd72495637008aa896c06682333f7"
  },
  {
    "url": "assets/js/18.8d4f28f8.js",
    "revision": "e2f08090e9b21d326e3487425ae9cdd3"
  },
  {
    "url": "assets/js/19.08a6ee42.js",
    "revision": "40888e26d1e5d21435622a82157cb4d8"
  },
  {
    "url": "assets/js/2.d6163d7a.js",
    "revision": "95cdcc429c77ff109e34512ca470eb02"
  },
  {
    "url": "assets/js/20.bf734238.js",
    "revision": "2c0fae78c6938d2e31e2e31f0976059a"
  },
  {
    "url": "assets/js/21.dd43d42e.js",
    "revision": "9a874d4999272c917b2c30eec271cd94"
  },
  {
    "url": "assets/js/22.317319c5.js",
    "revision": "f4cef4e1cff1fe273b3218ab2ca07571"
  },
  {
    "url": "assets/js/23.9567e6f9.js",
    "revision": "eee5da39a1abd77a461b0a62c85ff893"
  },
  {
    "url": "assets/js/24.45923109.js",
    "revision": "7600083230e9bdf0f1bd109e9b72b382"
  },
  {
    "url": "assets/js/25.3b0b85b6.js",
    "revision": "e130f34fe31f9889344e68ddaa2b2141"
  },
  {
    "url": "assets/js/26.88e8ff71.js",
    "revision": "106b656cfc3e71824cf2c9fed740ac88"
  },
  {
    "url": "assets/js/27.11ef80be.js",
    "revision": "bf14f1f33835ec2ade198e6089a1475c"
  },
  {
    "url": "assets/js/28.d9b667a5.js",
    "revision": "863ce2ad746ee450eb326b587ce2df78"
  },
  {
    "url": "assets/js/29.5157a84e.js",
    "revision": "bbc3b0ff708c34290dfca45076313215"
  },
  {
    "url": "assets/js/3.ed0f6444.js",
    "revision": "815066179f40d092668bc2e03976428c"
  },
  {
    "url": "assets/js/7.caac8650.js",
    "revision": "265e18e5a37f32d07b58ec9c4e8a8888"
  },
  {
    "url": "assets/js/8.8c7da9ed.js",
    "revision": "d837995cdbf31513843a342f3dacc74c"
  },
  {
    "url": "assets/js/9.b39d4987.js",
    "revision": "40ef2e207a09ab918524b147b2a572b4"
  },
  {
    "url": "assets/js/app.b723ff83.js",
    "revision": "52d4f833bb33194e14844f86686e7fae"
  },
  {
    "url": "assets/js/vendors~docsearch.eab2d0f9.js",
    "revision": "5547e4474b10d47a52bde1ac239e0375"
  },
  {
    "url": "assets/js/vendors~flowchart.a0ae2a38.js",
    "revision": "080c7f8acbae6d20982d4e521d75d136"
  },
  {
    "url": "categories/index.html",
    "revision": "e71ef47048457a384780bab19caba45e"
  },
  {
    "url": "googleea31ca71997d7a22.html",
    "revision": "e8e6adbd7e5aec4222f1e8f9ea95fdfe"
  },
  {
    "url": "head.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "hero_old.png",
    "revision": "4e87182c817155fe1c94932ca2608e1f"
  },
  {
    "url": "icon.png",
    "revision": "eed06cf2fc5b064e600aa10ea521ef2b"
  },
  {
    "url": "icon.svg",
    "revision": "807e5b10e21985f8e8c8c997871c01a6"
  },
  {
    "url": "index.html",
    "revision": "14c971b6cb37251d23924ad6287dd0b0"
  },
  {
    "url": "qq.png",
    "revision": "b60315e63c60cd9ef0d377295f051b87"
  },
  {
    "url": "tag/index.html",
    "revision": "931f254340c2fd47da19e08b76cd8f9c"
  },
  {
    "url": "timeline/index.html",
    "revision": "0c26f13dfd78238ed9de802d0e2c8618"
  },
  {
    "url": "views/main/config-client.html",
    "revision": "1dc9931a16aa29bb4b397cb0d29fc9f8"
  },
  {
    "url": "views/main/index.html",
    "revision": "2467d011fe702ff78941e438b5ba114e"
  },
  {
    "url": "views/main/mod.html",
    "revision": "b4f0772c8f8a2d9ff3ee2ab50314b0f2"
  },
  {
    "url": "views/main/question.html",
    "revision": "8d8c2753a08e3c9741e3597ef7936d14"
  },
  {
    "url": "views/main/reg-skin.html",
    "revision": "d56990578a00ee110f9df297e03a9817"
  },
  {
    "url": "views/main/server.html",
    "revision": "c5921a76c7ebcbbb5753372503477c4d"
  },
  {
    "url": "views/others/donate.html",
    "revision": "e4de52b7e990697a8e8b59bb8e31eaca"
  },
  {
    "url": "views/others/download.html",
    "revision": "69eb5584457560cdfa0a6d28fcb8d652"
  },
  {
    "url": "views/others/messageBoard.html",
    "revision": "c4a7e42a5e0d7c7de26d4a365ceed364"
  },
  {
    "url": "wechat.png",
    "revision": "3a4c1b5c5c76322ce485dcac7e0e5cc8"
  },
  {
    "url": "wx.png",
    "revision": "37fd9e8167bb118717bf546a58fbe39f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
