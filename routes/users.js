var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("Kukkuluuruu!");
});

router.get('/toka',function(request,response)
{
  response.send("Kalle on kani");
  console.log("Kani on Kalle");

});

router.get('/kolmas/:nimi',function(request,response) 
{
  response.send("Olen "+request.params.nimi);
  console.log(request.params.nimi);

});

router.get('/neljas/:enimi/:snimi',function(request,response) 
{
  response.send("Minä olen "+request.params.enimi+" "+request.params.snimi);
  //console.log(request.params.nimi);

});

router.post('/',function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

module.exports = router;
