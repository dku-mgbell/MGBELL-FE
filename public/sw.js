if (!self.define) {
  let s,
    e = {};
  const c = (c, a) => (
    (c = new URL(c + '.js', a).href),
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
  self.define = (a, t) => {
    const i =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (e[i]) return;
    let n = {};
    const u = (s) => c(s, i),
      r = { module: { uri: i }, exports: n, require: u };
    e[i] = Promise.all(a.map((s) => r[s] || u(s))).then((s) => (t(...s), n));
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
          revision: '3906c942c8ea4cf81c33b9ff4afbb6f6',
        },
        {
          url: '/_next/static/chunks/106fd7b4-1f8731ec7ff8788d.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/1227-e583f526e9676135.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/1594-f3043ebb0cac55ba.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/17-74fbc808a63a7959.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/2995-9364a4b75dc8b568.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/3267-0c6d3c836f500009.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/3531-3502383b91ab1110.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/3654-22f81d7305cbae9b.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/3822-62a769fcd013595c.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/4235-c07d74a3dad62fdc.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/4343-212cafba0d469c88.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/4463-8840bca3da9f5dde.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/5133-4244cde2bdfc049e.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/5322-9e4cffb07da39de1.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/5744-ae27cf807e43812f.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/6543-dd61c4e347f3e304.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/6628-2e2cc4d42c469d15.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/6846-10629af081e95ea5.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/7652-f29456b68ba94851.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/814-9479927afe50055a.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/8246-1b2662d5471edbf5.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/8333-467386c2363258b3.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/9982-5a1705c4aa07bfab.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-96ead689c625b688.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/bag/%5Bid%5D/page-ad8c7219b2ffcb94.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/%5Bid%5D/page-a6b2fcf70d54a301.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/info/%5Bid%5D/page-bf60b104a9cf97db.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/layout-82ec1a815ef7b118.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/bag/order/success/layout-61f5da3c727cfe9f.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/bag/order/success/page-0906dd151de02e1a.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/bag/review/page-bdc92ab596cfd42e.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/bag/review/post/layout-f738432d3d262bac.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/bag/review/post/page-cb5a6df627401d6b.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/favorites/page-24705c5b93506383.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/layout-ef1c0ba9a8b2944a.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/location/page-6c70458d4e0df4cc.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/login/page-b9ecda884862e322.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/map/page-417851a32b0503e4.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/mypage/page-54f4a7cc4ed0ab38.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/mypage/review/page-bfe0a2d2fbdd6d85.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/account/page-f695f9d857883f4e.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/account/password/page-c070194f73b1b791.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/page-4514ea01ba9a5f9c.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/order/%5Bid%5D/page-6837296a4dbbc4ef.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/order/page-8aaa46dd1c344800.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/page-1837806a54993c7e.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/activate/page-8038d754558e60ca.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/info/page-0097b24be0c52c13.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/layout-a98401822ad761ed.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/page-9e4cc4e0d086bcf3.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/success/page-0d7449332fae12df.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/register/store/info/page-0c64c8e75acf12d0.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/register/store/layout-e98f2109fa86a2d8.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/register/store/page-d983ce05ed71fb00.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/email/page-afdc1d7dd96d719f.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/info/page-275740b6957c41fa.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/layout-749b7e3152dcd829.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/page-7ab80e2e8c8eb83f.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/password/page-f3fe62de0461bb4d.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/success/page-f7334f2baaceba5a.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/verify/page-0a3f90b1ef9ac8b6.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/store/layout-4dfea2821cd7e83f.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/store/order/page-8389122197b12ad5.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/store/sale/edit/page-35507f16a7bc5e0a.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/store/sale/layout-3ef5a74aa66eeba3.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/store/sale/page-2b6b40d08c90b7ec.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/app/store/settings/page-3ea7c8100067fca8.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/framework-dddd24dc860d1e97.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/main-a2e1f99e86bcfb67.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/main-app-7407315afefb1a83.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/pages/_app-54ee8489f6a3a9ab.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/pages/_error-d120982b5ec85a1e.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-30565df33ce175f2.js',
          revision: 'gjTQLLLmSjuQJHwqllv3u',
        },
        {
          url: '/_next/static/css/05d6809abb09cda4.css',
          revision: '05d6809abb09cda4',
        },
        {
          url: '/_next/static/css/0cc32a3c42a0d098.css',
          revision: '0cc32a3c42a0d098',
        },
        {
          url: '/_next/static/css/0d7e75c92f532abe.css',
          revision: '0d7e75c92f532abe',
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
          url: '/_next/static/css/1ad7e925c042bdde.css',
          revision: '1ad7e925c042bdde',
        },
        {
          url: '/_next/static/css/1ba117827a34a61f.css',
          revision: '1ba117827a34a61f',
        },
        {
          url: '/_next/static/css/1bdd66013b49e14f.css',
          revision: '1bdd66013b49e14f',
        },
        {
          url: '/_next/static/css/1c50a8f292d30bf1.css',
          revision: '1c50a8f292d30bf1',
        },
        {
          url: '/_next/static/css/2222667e3c4bed69.css',
          revision: '2222667e3c4bed69',
        },
        {
          url: '/_next/static/css/25d521b3a97c63bc.css',
          revision: '25d521b3a97c63bc',
        },
        {
          url: '/_next/static/css/2e1f7821726e204e.css',
          revision: '2e1f7821726e204e',
        },
        {
          url: '/_next/static/css/370cb8a535d6d9e4.css',
          revision: '370cb8a535d6d9e4',
        },
        {
          url: '/_next/static/css/3785900c14cdc9f5.css',
          revision: '3785900c14cdc9f5',
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
          url: '/_next/static/css/4c9328ceb9d3974d.css',
          revision: '4c9328ceb9d3974d',
        },
        {
          url: '/_next/static/css/4dac7e18d12e5f87.css',
          revision: '4dac7e18d12e5f87',
        },
        {
          url: '/_next/static/css/4f87c5f8ec0b57cf.css',
          revision: '4f87c5f8ec0b57cf',
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
          url: '/_next/static/css/7cf95ac3eea7e5fe.css',
          revision: '7cf95ac3eea7e5fe',
        },
        {
          url: '/_next/static/css/7de320ed78f6bc43.css',
          revision: '7de320ed78f6bc43',
        },
        {
          url: '/_next/static/css/8510b9299dc283d3.css',
          revision: '8510b9299dc283d3',
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
          url: '/_next/static/css/88bfe014e80266c5.css',
          revision: '88bfe014e80266c5',
        },
        {
          url: '/_next/static/css/8dc3d28e524c332f.css',
          revision: '8dc3d28e524c332f',
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
          url: '/_next/static/css/9fcfa62ad72d54ea.css',
          revision: '9fcfa62ad72d54ea',
        },
        {
          url: '/_next/static/css/9fe30e1d791700fc.css',
          revision: '9fe30e1d791700fc',
        },
        {
          url: '/_next/static/css/a4ef8b7e49b490b8.css',
          revision: 'a4ef8b7e49b490b8',
        },
        {
          url: '/_next/static/css/a6a9eb1e3d3c8996.css',
          revision: 'a6a9eb1e3d3c8996',
        },
        {
          url: '/_next/static/css/a90ec7fecdb54f45.css',
          revision: 'a90ec7fecdb54f45',
        },
        {
          url: '/_next/static/css/aaf7df61bcf5caa6.css',
          revision: 'aaf7df61bcf5caa6',
        },
        {
          url: '/_next/static/css/ac1b891da4b53949.css',
          revision: 'ac1b891da4b53949',
        },
        {
          url: '/_next/static/css/ac9648f37893f79f.css',
          revision: 'ac9648f37893f79f',
        },
        {
          url: '/_next/static/css/aed48686bfeee9a0.css',
          revision: 'aed48686bfeee9a0',
        },
        {
          url: '/_next/static/css/bcdc4c222e6ce56d.css',
          revision: 'bcdc4c222e6ce56d',
        },
        {
          url: '/_next/static/css/bec643a286a85760.css',
          revision: 'bec643a286a85760',
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
          url: '/_next/static/css/ca814ac36ed5a826.css',
          revision: 'ca814ac36ed5a826',
        },
        {
          url: '/_next/static/css/d13aa92d4c5a4ff7.css',
          revision: 'd13aa92d4c5a4ff7',
        },
        {
          url: '/_next/static/css/d224235c4e7914ae.css',
          revision: 'd224235c4e7914ae',
        },
        {
          url: '/_next/static/css/d87010e7f0beecf9.css',
          revision: 'd87010e7f0beecf9',
        },
        {
          url: '/_next/static/css/dc0bf1ccbb301e24.css',
          revision: 'dc0bf1ccbb301e24',
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
          url: '/_next/static/css/ec3a4c8e721d1b30.css',
          revision: 'ec3a4c8e721d1b30',
        },
        {
          url: '/_next/static/css/ed2185914f767035.css',
          revision: 'ed2185914f767035',
        },
        {
          url: '/_next/static/css/fa048befdd413fcb.css',
          revision: 'fa048befdd413fcb',
        },
        {
          url: '/_next/static/css/fd1f986a80d3ec79.css',
          revision: 'fd1f986a80d3ec79',
        },
        {
          url: '/_next/static/gjTQLLLmSjuQJHwqllv3u/_buildManifest.js',
          revision: 'bee0b649dbbd543ea1bedb59ef8b5c40',
        },
        {
          url: '/_next/static/gjTQLLLmSjuQJHwqllv3u/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
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
        { url: '/logo192.png', revision: '818e96c095043e054e779875fa897685' },
        { url: '/logo512.png', revision: '02cc60390076c41f23936fdf9a2a4f93' },
        { url: '/manifest.json', revision: '5ba672da23d4ecc3a3748f071dc2f206' },
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
              state: a,
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
