module.exports = function (app) {
  
  app.use(function (req, res, next) {
      // 因为前后端分离开发，需要处理跨域，所以对所有请求均设置响应头
      res.setHeader('Access-Control-Allow-Origin','http://localhost:8080')
      // 如果要发送带凭证的请求，必须要指定域名，
      res.setHeader('Access-Control-Allow-Headers', 'content-type');
      // res.setHeader('Access-Control-Allow-Methods','GET','POST','PUT','DELETE','OPTIONS')
      res.setHeader('Access-Control-Allow-Credentials','true')
      next();
  });

  app.options("*", function (req, res, next) {
      // 如果是预请求，就直接终结请求-响应循环
      res.end()
  });


  app.get('/', function (req, res) {
    res.redirect('/posts');
  });

  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/posts', require('./posts'));

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404');
    }
  });
};
