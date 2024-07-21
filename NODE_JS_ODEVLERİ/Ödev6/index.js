const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// Root (Index) route
router.get('/', (ctx) => {
  ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
});

// Hakkimda route
router.get('/hakkimda', (ctx) => {
  ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
});

// Iletisim route
router.get('/iletisim', (ctx) => {
  ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});
