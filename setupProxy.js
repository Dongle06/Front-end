const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    ["/api", "/socket.io"],
    createProxyMiddleware({
      target: "https://donglebook.org",
      ws: true,
      changeOrigin: true
    })
  );
};
