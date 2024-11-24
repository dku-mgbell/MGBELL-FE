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
    const t =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (e[t]) return;
    let n = {};
    const r = (s) => c(s, t),
      o = { module: { uri: t }, exports: n, require: r };
    e[t] = Promise.all(i.map((s) => o[s] || r(s))).then((s) => (a(...s), n));
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
          revision: '9f4d474d408986aec22d341e42538a03',
        },
        {
          url: '/_next/static/NEIKSboPGizmNXwvDLZH5/_buildManifest.js',
          revision: 'bee0b649dbbd543ea1bedb59ef8b5c40',
        },
        {
          url: '/_next/static/NEIKSboPGizmNXwvDLZH5/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/106fd7b4-1f8731ec7ff8788d.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/1315-127e9b8841d660d0.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/1590-fd265cf1a756abae.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/163-93014501941dc45e.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/2464-0e2cd1f9c8dc2c85.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/291-b11ce73bfecfb68d.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/3654-22f81d7305cbae9b.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/3709-a5c3ecec6e655928.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/4343-212cafba0d469c88.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/5133-2c864714e2056c90.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/5322-9e4cffb07da39de1.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/5457-f74dd07d22d80024.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/5744-ae27cf807e43812f.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/6543-dd61c4e347f3e304.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/6624-0b67eb2e0eb9db00.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/6925-5a9c6de8c5b8ca56.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/7105-8b11be64bc26657f.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/7216-41232125e0dc1cdf.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/7494-32be61bd555641d4.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/7998-77d55f2e94d3c749.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/9133-c93565002614bb26.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/9982-5a1705c4aa07bfab.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/9983-0abe7fd1e291b8db.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-96ead689c625b688.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/bag/%5Bid%5D/page-1ffdc6340c596b16.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/%5Bid%5D/page-75abc1df46f54a27.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/info/%5Bid%5D/page-203f21e71b3fddc4.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/layout-d8cd9f4b7a3ac162.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/bag/order/success/layout-eac55b32664bcd54.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/bag/order/success/page-77e020e9a51c306c.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/bag/review/page-7594aa4f11c4cd34.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/bag/review/post/layout-f738432d3d262bac.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/bag/review/post/page-0be3045375e2af14.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/favorites/page-18e07342cd4d68e1.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/find/password/page-389ecc8db3fccd9a.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/layout-671bac502cbe62e9.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/location/page-1ddbc3cb734989d6.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/login/page-12684eeac90d84e0.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/map/page-80b26718b21084de.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/mypage/page-835d275e7c27e5dd.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/mypage/review/page-1ceed02cd884ca43.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/account/page-0b4b62e6a862a998.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/account/password/page-a75a9749647d20d5.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/page-44f8e149f4418ffb.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/order/%5Bid%5D/page-b5d69468d6367ccf.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/order/page-b924aeb7bd0a0e75.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/page-df8d7a73ebcda742.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/activate/page-6d1a2934031d0942.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/info/page-3a0242301e9a29f2.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/layout-4e5e7efa6108143e.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/page-8f9dbb081d953f86.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/success/page-682586890f470bf9.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/register/store/info/page-0c865869db8a1cbc.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/register/store/layout-e80488e85a2af9cf.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/register/store/page-cc18766e81c2c7c8.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/email/page-0fb8a773045175d0.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/info/page-f7b8937b91d2bbc8.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/layout-1a962e0fb6db4535.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/page-457873766b9124ef.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/password/page-b37cf8187d254d6a.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/success/page-94f3ccac8da9dfe0.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/verify/page-0c1dcb7a4e9be73e.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/store/layout-4dfea2821cd7e83f.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/store/order/page-4b53d2a9e5a19e32.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/store/sale/edit/page-81b4b873b8394f81.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/store/sale/layout-3ef5a74aa66eeba3.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/store/sale/page-295d5895fad46dbd.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/app/store/settings/page-2984d95c8fffdf19.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/framework-dddd24dc860d1e97.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/main-78ea77edbbc616c8.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/main-app-7407315afefb1a83.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/pages/_app-54ee8489f6a3a9ab.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/pages/_error-d120982b5ec85a1e.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-8c2ac305af4668e2.js',
          revision: 'NEIKSboPGizmNXwvDLZH5',
        },
        {
          url: '/_next/static/css/05d6809abb09cda4.css',
          revision: '05d6809abb09cda4',
        },
        {
          url: '/_next/static/css/06c6db5669f60079.css',
          revision: '06c6db5669f60079',
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
          url: '/_next/static/css/210df8821c178739.css',
          revision: '210df8821c178739',
        },
        {
          url: '/_next/static/css/2441ff50cad266c5.css',
          revision: '2441ff50cad266c5',
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
          url: '/_next/static/css/2ffe39ac4d631940.css',
          revision: '2ffe39ac4d631940',
        },
        {
          url: '/_next/static/css/30c1d8ff9dfc75dc.css',
          revision: '30c1d8ff9dfc75dc',
        },
        {
          url: '/_next/static/css/370cb8a535d6d9e4.css',
          revision: '370cb8a535d6d9e4',
        },
        {
          url: '/_next/static/css/3afc203a67b2c7cd.css',
          revision: '3afc203a67b2c7cd',
        },
        {
          url: '/_next/static/css/3ec80a4a49a1eaab.css',
          revision: '3ec80a4a49a1eaab',
        },
        {
          url: '/_next/static/css/4216f62eba05164a.css',
          revision: '4216f62eba05164a',
        },
        {
          url: '/_next/static/css/4c9328ceb9d3974d.css',
          revision: '4c9328ceb9d3974d',
        },
        {
          url: '/_next/static/css/4d0e0685d24c0a76.css',
          revision: '4d0e0685d24c0a76',
        },
        {
          url: '/_next/static/css/4d814320f29fc045.css',
          revision: '4d814320f29fc045',
        },
        {
          url: '/_next/static/css/4e0dae020dac0ee6.css',
          revision: '4e0dae020dac0ee6',
        },
        {
          url: '/_next/static/css/50a87f7fa32a356d.css',
          revision: '50a87f7fa32a356d',
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
          url: '/_next/static/css/60320b2ecd8ee4d8.css',
          revision: '60320b2ecd8ee4d8',
        },
        {
          url: '/_next/static/css/61fcc54f126c8b6c.css',
          revision: '61fcc54f126c8b6c',
        },
        {
          url: '/_next/static/css/6372b425625233ee.css',
          revision: '6372b425625233ee',
        },
        {
          url: '/_next/static/css/63a24c4d10b5feee.css',
          revision: '63a24c4d10b5feee',
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
          url: '/_next/static/css/88afec35de8f27da.css',
          revision: '88afec35de8f27da',
        },
        {
          url: '/_next/static/css/8c9137c79bf75114.css',
          revision: '8c9137c79bf75114',
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
          url: '/_next/static/css/98f56f98cba34675.css',
          revision: '98f56f98cba34675',
        },
        {
          url: '/_next/static/css/9b7444ac82cd7cf7.css',
          revision: '9b7444ac82cd7cf7',
        },
        {
          url: '/_next/static/css/9fe30e1d791700fc.css',
          revision: '9fe30e1d791700fc',
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
          url: '/_next/static/css/aed48686bfeee9a0.css',
          revision: 'aed48686bfeee9a0',
        },
        {
          url: '/_next/static/css/bcdc4c222e6ce56d.css',
          revision: 'bcdc4c222e6ce56d',
        },
        {
          url: '/_next/static/css/bef403e4b51110e5.css',
          revision: 'bef403e4b51110e5',
        },
        {
          url: '/_next/static/css/befed4f3af07cc94.css',
          revision: 'befed4f3af07cc94',
        },
        {
          url: '/_next/static/css/c128a2a0876e328f.css',
          revision: 'c128a2a0876e328f',
        },
        {
          url: '/_next/static/css/c1d4f970e4a219a6.css',
          revision: 'c1d4f970e4a219a6',
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
          url: '/_next/static/css/d224235c4e7914ae.css',
          revision: 'd224235c4e7914ae',
        },
        {
          url: '/_next/static/css/d87010e7f0beecf9.css',
          revision: 'd87010e7f0beecf9',
        },
        {
          url: '/_next/static/css/da1b26fe4fa79f9b.css',
          revision: 'da1b26fe4fa79f9b',
        },
        {
          url: '/_next/static/css/dc0bf1ccbb301e24.css',
          revision: 'dc0bf1ccbb301e24',
        },
        {
          url: '/_next/static/css/e307066713f89fce.css',
          revision: 'e307066713f89fce',
        },
        {
          url: '/_next/static/css/e94bd2bfab28cf81.css',
          revision: 'e94bd2bfab28cf81',
        },
        {
          url: '/_next/static/css/ea7cfed5ba76a77a.css',
          revision: 'ea7cfed5ba76a77a',
        },
        {
          url: '/_next/static/css/ebe96036fc79b2d0.css',
          revision: 'ebe96036fc79b2d0',
        },
        {
          url: '/_next/static/css/ed2185914f767035.css',
          revision: 'ed2185914f767035',
        },
        {
          url: '/_next/static/css/eec492cb6b5af446.css',
          revision: 'eec492cb6b5af446',
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
          url: '/_next/static/media/bag-confetti.861b2b4e.png',
          revision: '0986134e72c02de54098f3d1758b7049',
        },
        {
          url: '/_next/static/media/bag.eb618674.png',
          revision: 'c70340498a696991bde998a9205bef4e',
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
          url: '/_next/static/media/bell-none.ab56cba8.png',
          revision: '14777b6f23c79cf05880fb9e487d6bf1',
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
          url: '/_next/static/media/pin.8d6b470c.png',
          revision: 'b611a44221652e5a68c7b4017b519567',
        },
        {
          url: '/_next/static/media/register-store.27b1a076.png',
          revision: 'd36f171a1b78781de555c09638bdc461',
        },
        {
          url: '/_next/static/media/save-earth.74b7902b.png',
          revision: '0cb29a8976dac0683419052d84c7cd8f',
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
          url: '/firebase-messaging-sw.js',
          revision: 'dca90504041a4daf487f4d75df0f1661',
        },
        { url: '/logo192.png', revision: '818e96c095043e054e779875fa897685' },
        { url: '/logo512.png', revision: '02cc60390076c41f23936fdf9a2a4f93' },
        { url: '/manifest.json', revision: '5ba672da23d4ecc3a3748f071dc2f206' },
        {
          url: '/mockServiceWorker.js',
          revision: '8ca11a2c8b51c45ef2ad9fb8260660a6',
        },
        {
          url: '/notification-sound.mp3',
          revision: 'b14446bd1f53522cf7930d93aeab77ba',
        },
        { url: '/og-img.png', revision: '3fabf782917e200b89ed440a9b58d22f' },
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
