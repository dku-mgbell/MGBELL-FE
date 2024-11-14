if (!self.define) {
  let s,
    e = {};
  const c = (c, i) => (
    (c = new URL(c + '.js', i).href),
    e[c] ||
      new Promise((e) => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = c), (s.onload = e), document.head.appendChild(s);
        } else (s = c), importScripts(c), e();
      }).then(() => {
        let s = e[c];
        if (!s) throw new Error(`Module ${c} didn’t register its module`);
        return s;
      })
  );
  self.define = (i, a) => {
    const n =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (e[n]) return;
    let t = {};
    const o = (s) => c(s, n),
      r = { module: { uri: n }, exports: t, require: o };
    e[n] = Promise.all(i.map((s) => r[s] || o(s))).then((s) => (a(...s), t));
  };
}
define(['./workbox-843f4dd0'], function (s) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '005cfecc76c53fe972b90bdd7bd6313a',
        },
        {
          url: '/_next/static/chunks/106fd7b4-1f8731ec7ff8788d.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/1138-78476412d49f0908.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/1227-a250c4e8e8d5d30b.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/2782-bb6c88e8b34667ce.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/3390-794971d05493101b.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/3531-41b04f303683766e.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/4343-212cafba0d469c88.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/4563-e755bd76fbf0eec2.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/5322-9e4cffb07da39de1.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/5597-d9a08db1da83b6e5.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/5744-ae27cf807e43812f.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/6019-fb59783076b2b588.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/6776-e1eeca70ee68e3a2.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/7652-f29456b68ba94851.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/7936-de1b146f1ba75e79.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/7953-eb8ed18cc01d4422.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/7963-82187608b1683931.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/8088-597d6c193cf757ed.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/8418-e11bf62b0b713154.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/8703-4c2fe6e8718ae851.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/9982-5a1705c4aa07bfab.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-96ead689c625b688.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/bag/%5Bid%5D/page-78e61d3bb279f46b.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/%5Bid%5D/page-a7dd5f818d33a1f6.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/info/%5Bid%5D/page-0ec2c3a9713a85e6.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/layout-7ea54065c08f200b.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/bag/order/success/layout-27bd4bb1a1c8ccf4.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/bag/order/success/page-9272affea048d33a.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/bag/review/page-385bbd16eca8f385.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/bag/review/post/layout-b272ddc601cd925c.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/bag/review/post/page-347fb84ca3f43883.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/favorites/page-390c40a35dab54fd.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/layout-beb5d87eae2f8d71.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/location/page-290ac0fafbee5d6b.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/login/page-bcabb8c0cb0d72e0.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/map/page-fad4cb6bccbe8de5.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/mypage/page-2ebbec7cec781f4b.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/mypage/review/page-fd68c81d1f2c2ce7.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/account/page-a01a98ed77ce4864.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/account/password/page-f4071b1e34134635.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/page-da10abcf0d2a915f.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/order/%5Bid%5D/page-1e0cc3419a318a5c.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/order/page-552b1cc95184a6db.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/page-59330743feaed5ff.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/activate/page-e6d1b81544f80e7f.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/info/page-81cc7c80c17f65e2.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/layout-3489518ee3391fbf.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/page-13e2ec266d08ee4e.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/success/page-c21c849c7c2c195c.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/register/store/info/page-c3fb4a8323e1aba3.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/register/store/layout-b73ebad25a73fd40.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/register/store/page-d36f62afd2e51be2.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/email/page-a309180defcd537b.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/info/page-84c23dc889b98d25.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/layout-c3884efd58982fc8.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/page-ef881628c13fd785.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/password/page-aba2d4a54a7b1f39.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/success/page-f7f82a8a2aa5454d.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/verify/page-f5694a256e36074a.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/store/layout-00931b9f01e78215.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/store/order/page-15c22fb9fc363bd5.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/store/page-eef16b29ec80cbae.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/store/sale/page-6d43dc17329a62d5.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/app/store/settings/page-1ab45dcb3676e490.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/framework-dddd24dc860d1e97.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/main-app-7407315afefb1a83.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/main-bc5e17450a85f814.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/pages/_app-54ee8489f6a3a9ab.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/pages/_error-d120982b5ec85a1e.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-cad976f6d139af1d.js',
          revision: 'wBoBnigho9DYjmYq3-xfb',
        },
        {
          url: '/_next/static/css/11fadd852968f5e5.css',
          revision: '11fadd852968f5e5',
        },
        {
          url: '/_next/static/css/131b113dc193ab18.css',
          revision: '131b113dc193ab18',
        },
        {
          url: '/_next/static/css/1665813abdd4683e.css',
          revision: '1665813abdd4683e',
        },
        {
          url: '/_next/static/css/17f696bf6ca741f0.css',
          revision: '17f696bf6ca741f0',
        },
        {
          url: '/_next/static/css/18a9ca787aa46130.css',
          revision: '18a9ca787aa46130',
        },
        {
          url: '/_next/static/css/1ba117827a34a61f.css',
          revision: '1ba117827a34a61f',
        },
        {
          url: '/_next/static/css/1c50a8f292d30bf1.css',
          revision: '1c50a8f292d30bf1',
        },
        {
          url: '/_next/static/css/232f978deab6a042.css',
          revision: '232f978deab6a042',
        },
        {
          url: '/_next/static/css/257d5f2e651a2ef9.css',
          revision: '257d5f2e651a2ef9',
        },
        {
          url: '/_next/static/css/25d521b3a97c63bc.css',
          revision: '25d521b3a97c63bc',
        },
        {
          url: '/_next/static/css/269a58951c8f3dc4.css',
          revision: '269a58951c8f3dc4',
        },
        {
          url: '/_next/static/css/34b6fa5a67ee86f8.css',
          revision: '34b6fa5a67ee86f8',
        },
        {
          url: '/_next/static/css/370cb8a535d6d9e4.css',
          revision: '370cb8a535d6d9e4',
        },
        {
          url: '/_next/static/css/3ec80a4a49a1eaab.css',
          revision: '3ec80a4a49a1eaab',
        },
        {
          url: '/_next/static/css/3f79ebbd4556ea52.css',
          revision: '3f79ebbd4556ea52',
        },
        {
          url: '/_next/static/css/43c49f8bf73a79e6.css',
          revision: '43c49f8bf73a79e6',
        },
        {
          url: '/_next/static/css/4c9328ceb9d3974d.css',
          revision: '4c9328ceb9d3974d',
        },
        {
          url: '/_next/static/css/4cdb3d30a86e6fb9.css',
          revision: '4cdb3d30a86e6fb9',
        },
        {
          url: '/_next/static/css/4dac7e18d12e5f87.css',
          revision: '4dac7e18d12e5f87',
        },
        {
          url: '/_next/static/css/5735cab1d5c0792c.css',
          revision: '5735cab1d5c0792c',
        },
        {
          url: '/_next/static/css/5943e64245fc31b9.css',
          revision: '5943e64245fc31b9',
        },
        {
          url: '/_next/static/css/63a24c4d10b5feee.css',
          revision: '63a24c4d10b5feee',
        },
        {
          url: '/_next/static/css/72c3cad81229d009.css',
          revision: '72c3cad81229d009',
        },
        {
          url: '/_next/static/css/743fc2a940971db0.css',
          revision: '743fc2a940971db0',
        },
        {
          url: '/_next/static/css/76cc2f002f412f17.css',
          revision: '76cc2f002f412f17',
        },
        {
          url: '/_next/static/css/77049a6e04a43e16.css',
          revision: '77049a6e04a43e16',
        },
        {
          url: '/_next/static/css/7de320ed78f6bc43.css',
          revision: '7de320ed78f6bc43',
        },
        {
          url: '/_next/static/css/82d9f426e618a680.css',
          revision: '82d9f426e618a680',
        },
        {
          url: '/_next/static/css/872d83a0d28a9762.css',
          revision: '872d83a0d28a9762',
        },
        {
          url: '/_next/static/css/88344f15483ac8b2.css',
          revision: '88344f15483ac8b2',
        },
        {
          url: '/_next/static/css/8fc00b07fa0c4e6f.css',
          revision: '8fc00b07fa0c4e6f',
        },
        {
          url: '/_next/static/css/91b493f24897d1f8.css',
          revision: '91b493f24897d1f8',
        },
        {
          url: '/_next/static/css/949d4385681423fb.css',
          revision: '949d4385681423fb',
        },
        {
          url: '/_next/static/css/96b4281098a192a3.css',
          revision: '96b4281098a192a3',
        },
        {
          url: '/_next/static/css/97101333ab663ab8.css',
          revision: '97101333ab663ab8',
        },
        {
          url: '/_next/static/css/a88c0f935f908b4e.css',
          revision: 'a88c0f935f908b4e',
        },
        {
          url: '/_next/static/css/ac1b891da4b53949.css',
          revision: 'ac1b891da4b53949',
        },
        {
          url: '/_next/static/css/aed48686bfeee9a0.css',
          revision: 'aed48686bfeee9a0',
        },
        {
          url: '/_next/static/css/b0354d37b2f379db.css',
          revision: 'b0354d37b2f379db',
        },
        {
          url: '/_next/static/css/ba9988df8fca2494.css',
          revision: 'ba9988df8fca2494',
        },
        {
          url: '/_next/static/css/bef403e4b51110e5.css',
          revision: 'bef403e4b51110e5',
        },
        {
          url: '/_next/static/css/c21e4b1a6354343e.css',
          revision: 'c21e4b1a6354343e',
        },
        {
          url: '/_next/static/css/cc86ff2b7785d50b.css',
          revision: 'cc86ff2b7785d50b',
        },
        {
          url: '/_next/static/css/d224235c4e7914ae.css',
          revision: 'd224235c4e7914ae',
        },
        {
          url: '/_next/static/css/d4ff5c81c6f0fb7c.css',
          revision: 'd4ff5c81c6f0fb7c',
        },
        {
          url: '/_next/static/css/d87010e7f0beecf9.css',
          revision: 'd87010e7f0beecf9',
        },
        {
          url: '/_next/static/css/e024bc3c1d87c563.css',
          revision: 'e024bc3c1d87c563',
        },
        {
          url: '/_next/static/css/e1d258ff39c517d5.css',
          revision: 'e1d258ff39c517d5',
        },
        {
          url: '/_next/static/css/e307066713f89fce.css',
          revision: 'e307066713f89fce',
        },
        {
          url: '/_next/static/css/e4b175e271b875fc.css',
          revision: 'e4b175e271b875fc',
        },
        {
          url: '/_next/static/css/ec3a4c8e721d1b30.css',
          revision: 'ec3a4c8e721d1b30',
        },
        {
          url: '/_next/static/css/ed2185914f767035.css',
          revision: 'ed2185914f767035',
        },
        {
          url: '/_next/static/css/f32531825588a76e.css',
          revision: 'f32531825588a76e',
        },
        {
          url: '/_next/static/css/f347e96b8167cd25.css',
          revision: 'f347e96b8167cd25',
        },
        {
          url: '/_next/static/css/fd1f986a80d3ec79.css',
          revision: 'fd1f986a80d3ec79',
        },
        {
          url: '/_next/static/media/1e212631d1012eb8-s.p.woff2',
          revision: '64286787529dc701553c87ba8c9d0d6d',
        },
        {
          url: '/_next/static/media/SNS-Google.3561dda6.png',
          revision: '0a0e7bdfc326951af902405979e8cb2a',
        },
        {
          url: '/_next/static/media/SNS-Kakao.cdad5eba.png',
          revision: 'e130329e026c01681715d928756a9725',
        },
        {
          url: '/_next/static/media/SNS-Naver.d1c9c06c.png',
          revision: '328ebf3718dec597cf028fbd479f51d9',
        },
        {
          url: '/_next/static/media/bag.3ecd58a3.png',
          revision: '5e102dac8cf763e8a42fa29ec1cfe6ca',
        },
        {
          url: '/_next/static/media/bell-bad.ab56cba8.png',
          revision: '14777b6f23c79cf05880fb9e487d6bf1',
        },
        {
          url: '/_next/static/media/bell-best.053e2734.png',
          revision: '6f01ca0c8e190c9b1372db00f49d9534',
        },
        {
          url: '/_next/static/media/bell-good.e8a67ab9.png',
          revision: '541c9dff2bddda5631c073b9a116d1b9',
        },
        {
          url: '/_next/static/media/bell-not-bad.7cb7a33b.png',
          revision: 'a754536154322c9047f0be5646115346',
        },
        {
          url: '/_next/static/media/marker.e8d81a60.png',
          revision: 'bce1e50e6c6951cc8014473422eb06f4',
        },
        {
          url: '/_next/static/media/owner.6b603b8b.png',
          revision: '9756d604241af716497428151ce44611',
        },
        {
          url: '/_next/static/media/pin.c3c4ecde.png',
          revision: '2ceee38601007f4ec5d9085fc421393c',
        },
        {
          url: '/_next/static/media/register-store.27b1a076.png',
          revision: 'd36f171a1b78781de555c09638bdc461',
        },
        {
          url: '/_next/static/media/thumbnail.e22da5fd.png',
          revision: 'e0bf360cf5dc218c086c621d658514da',
        },
        {
          url: '/_next/static/media/user.3846298f.png',
          revision: '25ca6b1e0560ccc8e2962374d8fffffe',
        },
        {
          url: '/_next/static/wBoBnigho9DYjmYq3-xfb/_buildManifest.js',
          revision: 'bee0b649dbbd543ea1bedb59ef8b5c40',
        },
        {
          url: '/_next/static/wBoBnigho9DYjmYq3-xfb/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/logo192.png', revision: '818e96c095043e054e779875fa897685' },
        { url: '/logo512.png', revision: '02cc60390076c41f23936fdf9a2a4f93' },
        { url: '/manifest.json', revision: 'ecf528a1720120ff11679c1459156c5c' },
        {
          url: '/mockServiceWorker.js',
          revision: '8ca11a2c8b51c45ef2ad9fb8260660a6',
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      '/',
      new s.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: s,
              response: e,
              event: c,
              state: i,
            }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new s.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new s.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new s.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:mp4)$/i,
      new s.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:js)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:css|less)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new s.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        const e = s.pathname;
        return !e.startsWith('/api/auth/') && !!e.startsWith('/api/');
      },
      new s.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        return !s.pathname.startsWith('/api/');
      },
      new s.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      ({ url: s }) => !(self.origin === s.origin),
      new s.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});
