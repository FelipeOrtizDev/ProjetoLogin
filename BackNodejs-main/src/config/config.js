const corsConfig = ( config ) =>{
    config.addHook("onRequest", (req, reply, done) => {
        reply.header("Access-Control-Allow-Origin", req.headers.origin);
        reply.header(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, OPTIONS"
        );
        reply.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        reply.header("Access-Control-Allow-Credentials", "true");
        if (req.method === "OPTIONS") {
          reply.status(200).send();
        } else {
          done();
        }
      });
}

module.exports = { corsConfig }