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
    const r = (s) => c(s, i),
      d = { module: { uri: i }, exports: n, require: r };
    e[i] = Promise.all(a.map((s) => d[s] || r(s))).then((s) => (t(...s), n));
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
          revision: 'c247cfa39e1f60f83419f470b7290c4f',
        },
        {
          url: '/_next/static/chunks/106fd7b4-1f8731ec7ff8788d.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/1406-a6fcb69afb494188.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/1590-9a13e450824b4f11.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/2372-3f1f91ec574bc295.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/2464-0e2cd1f9c8dc2c85.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/2799-b1c69e2686a0c861.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/3454-5be9d3d28f9f5792.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/3515-ab270f868cb5a8f0.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/3654-22f81d7305cbae9b.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/4101-06e2436fbbebbce8.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/4300-5754a7162449e446.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/4343-212cafba0d469c88.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/4506-60101f5514462945.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/4771-9c495883cc0f4735.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/5457-f74dd07d22d80024.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/5989-59e491c4e5d45e41.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/6543-dd61c4e347f3e304.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/6925-3a5b639934bcc846.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/7216-6c70d88c3386bcf9.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/7346-f59c84041594af86.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/7397-b4e2187919ee511a.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/7528-477d6c9109ee53ca.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/9982-5a1705c4aa07bfab.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/(index)/page-066bf6de9e204a1c.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-96ead689c625b688.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/about/page-a3b955386e824a68.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/bag/%5Bid%5D/page-56171238ec4adc80.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/%5Bid%5D/page-266333757fb6d79f.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/info/%5Bid%5D/page-1185cc4e1f90796f.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/bag/order/(order-progress)/layout-538cced29368dc89.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/bag/order/success/layout-fbb0e96fc3f95ee6.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/bag/order/success/page-b2b5236b12993f14.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/bag/review/page-abbf6751d6eef7cd.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/bag/review/post/layout-f738432d3d262bac.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/bag/review/post/page-cf7e72cfe59901f6.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/favorites/page-5995ce20b6fcbf40.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/find/password/page-22174736806a527e.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/layout-e6db22c9fdec1f71.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/location/page-ca45b8eebc16622f.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/login/page-c89e40671aa58420.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/map/page-987f8046324a19b7.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/mypage/page-72ab610f1fd46007.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/mypage/review/page-e525b5c1bbf61183.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/account/page-ad6212c2eea8ea19.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/account/password/page-a821f48fdd468f11.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/page-4770e95efe8ffece.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/order/%5Bid%5D/page-e814f975f329f624.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/order/page-5e63ec95339ff1de.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/partner/page-87514988998105e4.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/activate/page-2692360c9843cd68.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/info/page-5dae83b667eb05ae.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/layout-e0762afd7a9e280c.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/page-a1e037806e8b39e0.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/register/bag/(steps)/success/page-f542b8f5f0ac309a.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/register/store/info/page-4e49b503c465b713.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/register/store/layout-e7f71440e5235876.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/register/store/page-248713cc482cd827.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/email/page-107703d88eaa3e12.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/info/page-1165e108b4f4347e.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/layout-f584a35fffadd2e2.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/page-983e99c7c2bd2361.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/password/page-4d984fc1f2b580db.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/success/page-4a394a35dcaf64eb.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/sign-up/(steps)/verify/page-02da28f6a742e1f1.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/store/layout-acea37d77df121d0.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/store/order/page-988cd03116a10f69.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/store/sale/edit/page-c6b8a08786bdb64f.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/store/sale/layout-3ef5a74aa66eeba3.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/store/sale/page-6e38eb0119fd8344.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/app/store/settings/page-8db33fb923ef31ab.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/framework-dddd24dc860d1e97.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/main-8ae3a789cfe6e7be.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/main-app-7407315afefb1a83.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/pages/_app-54ee8489f6a3a9ab.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/pages/_error-d120982b5ec85a1e.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-6d763401b16a2586.js',
          revision: 'z32Y56MKXM2VxW5wEYKU0',
        },
        {
          url: '/_next/static/css/04ba291e03d5a832.css',
          revision: '04ba291e03d5a832',
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
          url: '/_next/static/css/2052a8f4c62d88ff.css',
          revision: '2052a8f4c62d88ff',
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
          url: '/_next/static/css/262ecbfaa7013c22.css',
          revision: '262ecbfaa7013c22',
        },
        {
          url: '/_next/static/css/26a6d9bc88343532.css',
          revision: '26a6d9bc88343532',
        },
        {
          url: '/_next/static/css/2e1f7821726e204e.css',
          revision: '2e1f7821726e204e',
        },
        {
          url: '/_next/static/css/3245fdc9777631e6.css',
          revision: '3245fdc9777631e6',
        },
        {
          url: '/_next/static/css/342e9b886a31b3c5.css',
          revision: '342e9b886a31b3c5',
        },
        {
          url: '/_next/static/css/370cb8a535d6d9e4.css',
          revision: '370cb8a535d6d9e4',
        },
        {
          url: '/_next/static/css/373a1ef42ab077e7.css',
          revision: '373a1ef42ab077e7',
        },
        {
          url: '/_next/static/css/3afc203a67b2c7cd.css',
          revision: '3afc203a67b2c7cd',
        },
        {
          url: '/_next/static/css/3e7ed637fe5b428e.css',
          revision: '3e7ed637fe5b428e',
        },
        {
          url: '/_next/static/css/47f651f7313d6112.css',
          revision: '47f651f7313d6112',
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
          url: '/_next/static/css/4e0dae020dac0ee6.css',
          revision: '4e0dae020dac0ee6',
        },
        {
          url: '/_next/static/css/5139de044dc656a7.css',
          revision: '5139de044dc656a7',
        },
        {
          url: '/_next/static/css/5222dd09756f4dc9.css',
          revision: '5222dd09756f4dc9',
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
          url: '/_next/static/css/59c0ff0caff7d0da.css',
          revision: '59c0ff0caff7d0da',
        },
        {
          url: '/_next/static/css/72a9963b43b0af32.css',
          revision: '72a9963b43b0af32',
        },
        {
          url: '/_next/static/css/7b8ccf281e385eea.css',
          revision: '7b8ccf281e385eea',
        },
        {
          url: '/_next/static/css/8103f467f064619b.css',
          revision: '8103f467f064619b',
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
          url: '/_next/static/css/8c40d79e63435293.css',
          revision: '8c40d79e63435293',
        },
        {
          url: '/_next/static/css/9268658bb9ed9726.css',
          revision: '9268658bb9ed9726',
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
          url: '/_next/static/css/aaf7df61bcf5caa6.css',
          revision: 'aaf7df61bcf5caa6',
        },
        {
          url: '/_next/static/css/ad7506ac4d58dd87.css',
          revision: 'ad7506ac4d58dd87',
        },
        {
          url: '/_next/static/css/aed48686bfeee9a0.css',
          revision: 'aed48686bfeee9a0',
        },
        {
          url: '/_next/static/css/b9e6abfb7e90f0ca.css',
          revision: 'b9e6abfb7e90f0ca',
        },
        {
          url: '/_next/static/css/b9ed0d54735e83c6.css',
          revision: 'b9ed0d54735e83c6',
        },
        {
          url: '/_next/static/css/be46eb4d676db231.css',
          revision: 'be46eb4d676db231',
        },
        {
          url: '/_next/static/css/bef403e4b51110e5.css',
          revision: 'bef403e4b51110e5',
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
          url: '/_next/static/css/cb3f9d5cc2ec225e.css',
          revision: 'cb3f9d5cc2ec225e',
        },
        {
          url: '/_next/static/css/d61ed809ade1f94d.css',
          revision: 'd61ed809ade1f94d',
        },
        {
          url: '/_next/static/css/d87010e7f0beecf9.css',
          revision: 'd87010e7f0beecf9',
        },
        {
          url: '/_next/static/css/d8ae94b1f110c1cb.css',
          revision: 'd8ae94b1f110c1cb',
        },
        {
          url: '/_next/static/css/e07ce286f742d4f1.css',
          revision: 'e07ce286f742d4f1',
        },
        {
          url: '/_next/static/css/e94bd2bfab28cf81.css',
          revision: 'e94bd2bfab28cf81',
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
          url: '/_next/static/media/1e212631d1012eb8-s.p.woff2',
          revision: '64286787529dc701553c87ba8c9d0d6d',
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
          url: '/_next/static/z32Y56MKXM2VxW5wEYKU0/_buildManifest.js',
          revision: 'bee0b649dbbd543ea1bedb59ef8b5c40',
        },
        {
          url: '/_next/static/z32Y56MKXM2VxW5wEYKU0/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
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
