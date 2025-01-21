
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 1250, hash: '50b0d3f3dfc8507fac69b1bf6b63798d5844a625ecc12d618bedaa2ad26a0fcf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1763, hash: 'd48781b7d657a472153401345b2f77e37954659da06be2b3deffb6ed220320b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 3986, hash: 'b6e9a0a59ae108ddfd7c2fa997783a91907c19ee89fa00a0f56bb487a3a9dcc8', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4056, hash: 'b56d9bc503c3ea1f8d9416a218a3ead82987f7de1f574b14b3ce3f1b263a6713', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 2303, hash: '80fa9477d3e9973ff156b0c321511cedc92e391916c796d37b39bcec9c386eaa', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 4531, hash: '399f4ad55bd1501d3ab4ee12b4029db3a50be6a0b1a14e0142568929a6b87f31', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 8961, hash: 'f9c7940c69b7fba89e63214ff6fd36dad77382acf270167547308d40f2c4aa54', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
