var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const VerifyAuthToken=(req,res,next)=>{
    var jwtCheck = jwt({
        secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: 'https://dev-bfhy0ygs.us.auth0.com/.well-known/jwks.json'
      }),
      audience: 'aniHadin',
      issuer: 'https://dev-bfhy0ygs.us.auth0.com/',
      algorithms: ['RS256']
  });
  if(!jwtCheck){
     return  res.status("200").send("invalidToken")
      
  }
  next()
}

module.exports = VerifyAuthToken