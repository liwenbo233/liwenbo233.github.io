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
    "revision": "4c95ce51fb24f53841c80265752008d3"
  },
  {
    "url": "assets/css/0.styles.08292296.css",
    "revision": "ee34a3b89d60590f5f2c776289ad1d02"
  },
  {
    "url": "assets/img/Optional.1bd3000c.png",
    "revision": "1bd3000cde5a374e06c50a3f2f679a3d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.469042e6.js",
    "revision": "f26d8bdd63e3ee0a22a9fcc8d1e9487a"
  },
  {
    "url": "assets/js/11.8b4e1b2b.js",
    "revision": "08e278fdb0c5137f3655a52e73258d4e"
  },
  {
    "url": "assets/js/12.b106cf7f.js",
    "revision": "924024743a7f581b3f3874b830c5b5af"
  },
  {
    "url": "assets/js/13.3f42ac10.js",
    "revision": "c5daf4d9c75a29fc2c165f3b12e5dd8a"
  },
  {
    "url": "assets/js/14.9c2434f6.js",
    "revision": "6d3f22ea0a10260d095fe9eeca6399e6"
  },
  {
    "url": "assets/js/15.7ba841c0.js",
    "revision": "5b295cffccd995e5a64b7041cba06893"
  },
  {
    "url": "assets/js/16.fc2a1899.js",
    "revision": "5aa01b2a9aef2e47bcf77904916bc9a1"
  },
  {
    "url": "assets/js/17.169c555d.js",
    "revision": "e393674b1285af392aa4811a0723166f"
  },
  {
    "url": "assets/js/18.77707db9.js",
    "revision": "c18f3c12e4d4d03a875a09d091fea3f0"
  },
  {
    "url": "assets/js/19.7e98b8f8.js",
    "revision": "518928c32c567dfdcd58c04aaee30eb0"
  },
  {
    "url": "assets/js/2.781f74eb.js",
    "revision": "f6e13f386cd9c1994d94b489d6f0585e"
  },
  {
    "url": "assets/js/20.e863ee66.js",
    "revision": "29d308477b8fa3f537cb93059e1a10ec"
  },
  {
    "url": "assets/js/21.3ca19f36.js",
    "revision": "05bad91598e97b47fd042a8f8c8519ae"
  },
  {
    "url": "assets/js/22.e3c2c9f3.js",
    "revision": "061499d635bf141ff478b117a34f895f"
  },
  {
    "url": "assets/js/23.c4322108.js",
    "revision": "e2f16af847c679948535e8abe66d5c33"
  },
  {
    "url": "assets/js/24.8fcb8855.js",
    "revision": "6f1b814249aa6535a828a300be5c2317"
  },
  {
    "url": "assets/js/25.092319d1.js",
    "revision": "12271a59afb39787d749d6cccc2fa859"
  },
  {
    "url": "assets/js/26.11d1dc40.js",
    "revision": "62e9393464faa0542be4f6164944e319"
  },
  {
    "url": "assets/js/27.531aaf67.js",
    "revision": "7ed8becc61451a31fce0618efb1114ec"
  },
  {
    "url": "assets/js/28.1e968980.js",
    "revision": "f247b18731e1da40524239348cf959e8"
  },
  {
    "url": "assets/js/29.29663427.js",
    "revision": "ee66c0b29dc06299229093e5b78fcb52"
  },
  {
    "url": "assets/js/3.1781e0d2.js",
    "revision": "59f59854194c9da588fbc1b188ca4014"
  },
  {
    "url": "assets/js/30.568f0f8b.js",
    "revision": "7674da5e4b2eb66681863808f67ff91a"
  },
  {
    "url": "assets/js/31.1a5e82b8.js",
    "revision": "2f1736bafb630bfdb1ec03639249c102"
  },
  {
    "url": "assets/js/32.cb5ff5e5.js",
    "revision": "610dda602033b2d815f605ef393063a3"
  },
  {
    "url": "assets/js/33.5b9685b0.js",
    "revision": "e226001bf0b12d8725a2be5d651b7dd4"
  },
  {
    "url": "assets/js/34.7f944b1c.js",
    "revision": "1bdb9f175254c71ac50d95570435030a"
  },
  {
    "url": "assets/js/35.28079b54.js",
    "revision": "56c51d3001bf0ca33c82242ecd88265d"
  },
  {
    "url": "assets/js/36.ddd8a136.js",
    "revision": "ed7da9b28b6878810a8f4e85bb645667"
  },
  {
    "url": "assets/js/37.04c71234.js",
    "revision": "12e660b19aa81892bd3a85bde31f71c6"
  },
  {
    "url": "assets/js/38.16c4475e.js",
    "revision": "375762e0946ded9ddde9528918adff82"
  },
  {
    "url": "assets/js/39.0170f49c.js",
    "revision": "dd6e47b48d082ba486aed16c7f4be44b"
  },
  {
    "url": "assets/js/4.d211ec40.js",
    "revision": "6342befcdc91582d34c47d042b56a49b"
  },
  {
    "url": "assets/js/40.8a8fe432.js",
    "revision": "f50bf106abcfdb555187e366905c6996"
  },
  {
    "url": "assets/js/41.f6a9baea.js",
    "revision": "523e89d380da396808733359e24dff01"
  },
  {
    "url": "assets/js/42.4ea96f6b.js",
    "revision": "1835cda31d4d0e704ea12aa542c0fe82"
  },
  {
    "url": "assets/js/43.f0545594.js",
    "revision": "f0078f818e7b1bc530ecd9248ffe9c72"
  },
  {
    "url": "assets/js/44.7571e561.js",
    "revision": "1b2669e4d73fec6680d4ec72b1b74cec"
  },
  {
    "url": "assets/js/45.df4495b6.js",
    "revision": "3544398c1c6705b6baeea5fd8a29a70f"
  },
  {
    "url": "assets/js/46.23662c0e.js",
    "revision": "e9f8d73b992eb452c8ddd9576bee74e2"
  },
  {
    "url": "assets/js/47.936ce98c.js",
    "revision": "b0891a06d5fc56b9ef3a60d376af4b73"
  },
  {
    "url": "assets/js/5.33218771.js",
    "revision": "d635b01965b31c4e26217edc480cc385"
  },
  {
    "url": "assets/js/6.b0da79a0.js",
    "revision": "d8cc9e8c71e03f2540a85ba8aee10b5a"
  },
  {
    "url": "assets/js/7.5e5664da.js",
    "revision": "6335bccf0c1f733f4a2ca666a6e27ee9"
  },
  {
    "url": "assets/js/8.f19d404a.js",
    "revision": "ce67e977f422a9410d66e08ee5f2afe2"
  },
  {
    "url": "assets/js/9.e6e43f28.js",
    "revision": "cf5d02ae5fd548639cbf6efc65a28b05"
  },
  {
    "url": "assets/js/app.e26a8c80.js",
    "revision": "45ed76cf2466f7f475b21f942e3e7a00"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "797ada5dabba4d2d24822622fafec704"
  },
  {
    "url": "element/element2/index.html",
    "revision": "37f0119e1c9afd298c187546bcf02808"
  },
  {
    "url": "element/index.html",
    "revision": "5d07e2bb5e8bce6789e5535239ff8f61"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "981aee8472fc1f88a02946d50b00b069"
  },
  {
    "url": "java/index.html",
    "revision": "d43bd7be3cd6f55c7a74f32933f41cd0"
  },
  {
    "url": "java/java/1-SortingAlgorithm.html",
    "revision": "7cd78e421e9722bcab5b5fd66b8c8d85"
  },
  {
    "url": "java/java/2-SearchAlgorithm.html",
    "revision": "79147eeb3fac47a836f1e35790103d85"
  },
  {
    "url": "java/java/3-DesignPatterns.html",
    "revision": "d7f578076f80e9c5045c3b9417ff3032"
  },
  {
    "url": "java/java/4-DataStructures.html",
    "revision": "650239051cc34c46a45f9eb70ec0a706"
  },
  {
    "url": "java/java/BigDecimals.html",
    "revision": "1df83c9602ce1d3a9cf8c683023feaf5"
  },
  {
    "url": "java/java/DefaultFastJsonConfig.html",
    "revision": "8be848c1f18341371122596c09819b83"
  },
  {
    "url": "java/java/Enum.html",
    "revision": "ea351033e919869684a571685bad2de8"
  },
  {
    "url": "java/java/Executors.html",
    "revision": "8b0d87de48788725185f2c01d847a75e"
  },
  {
    "url": "java/java/Feature.html",
    "revision": "d152f924e1be27a84298a8504119b02b"
  },
  {
    "url": "java/java/Filter.html",
    "revision": "72320e939938f1367d2748991500805d"
  },
  {
    "url": "java/java/knowledge.html",
    "revision": "ed463fa3a3e5dc7ae41908aa9506e5fa"
  },
  {
    "url": "java/java/LocalDataSourceConfig.html",
    "revision": "1a42cc637d9ddc5c4fb7c21db010acc1"
  },
  {
    "url": "java/java/MapToQueryParam.html",
    "revision": "211b5e40bf1d25b56d78955d79e252e7"
  },
  {
    "url": "java/java/MenuTree.html",
    "revision": "367524148af44cb854beaf294fb46db8"
  },
  {
    "url": "java/java/Optional.html",
    "revision": "baffb2539b0ab0e67711b30b1d21e660"
  },
  {
    "url": "java/java/OptionalCollection.html",
    "revision": "faf5fb265f37f12409ec3d5eb96669bc"
  },
  {
    "url": "java/java/RedBlackTree.html",
    "revision": "42632aa8b367cdaa297848def1a9fd16"
  },
  {
    "url": "java/java/RedisKeyExpirationListener.html",
    "revision": "6adcd4e3af1fd8dbdc9472869a908a8d"
  },
  {
    "url": "java/java/Retry.html",
    "revision": "4707fedd8ffeb6d8b7d9c766b98fbb74"
  },
  {
    "url": "java/java/SpringSourceCode.html",
    "revision": "ec309300484bb8712ce55693c65d32f6"
  },
  {
    "url": "java/java/TaskExecutorConfig.html",
    "revision": "9a2b5cbfcbc102048bb93e7c1c05a87d"
  },
  {
    "url": "java/java/ThrowableInterceptConfig.html",
    "revision": "90d30fd0b90614b825f2f02d67bfe152"
  },
  {
    "url": "java/java/TreeMap.html",
    "revision": "afb2d7fb24654400c97dd5b73b2e78d4"
  },
  {
    "url": "java/java/XssHttpServletRequestWrapper.html",
    "revision": "91e77e7c149395a031ba55a2d0206b2b"
  },
  {
    "url": "mysql/index.html",
    "revision": "99bd9790341e213fc9775870aec0c9d7"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "07946a4a6a03fae51a8ebbdb919d97cf"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "534c6369ed1312d1bba0e5149c505350"
  },
  {
    "url": "other/index.html",
    "revision": "4ac7dba20fd1703a8dbcbf5f326aeca1"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "17110c71ff3a82d6d626d155e9b78902"
  },
  {
    "url": "vue/index.html",
    "revision": "2a0ff8a092484b66a0982e914607289c"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "129710a2250db15cb98b9b948b4c43d8"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "558674589d9983b01552230a02a3f0a5"
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
