const lineNotify = require('line-notify-nodejs')('1NYKIWBXRSELcAaYQNh7BD7nfBboG4uFppP1UjMDYmY');
const getJSON = require('get-json')
const dotenv = require('dotenv');
dotenv.config();


function getprice(){
 getJSON('https://api.coingecko.com/api/v3/simple/price?ids=band-protocol&vs_currencies=usd', function(error, response){
        let bandprice = response["band-protocol"]["usd"]
    
 getJSON('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', function(error, response){
        let btcprice = response["bitcoin"]["usd"]

 getJSON('https://api.coingecko.com/api/v3/simple/price?ids=rootstock&vs_currencies=usd', function(error, response){
        let rbtcprice = response["rootstock"]["usd"]

 getJSON('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd', function(error, response){
        let bnbprice = response["binancecoin"]["usd"]

 getJSON('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', function(error, response){
        let ethprice = response["ethereum"]["usd"]

 getJSON('https://backend.sovryn.app/sov/current-price', function(error, response){
        let sovprice = response['price']
        let sovusd = btcprice * sovprice;
        //let thb_rate = 31;
       
 
        getJSON('https://api.coingecko.com/api/v3/simple/price?ids=blink&vs_currencies=usd', function(error, response){
            let blinkPrice = response["blink"]["usd"]
            let blinkusd = blinkPrice;
            let myblk = 15000;

            

            console.log(blinkusd)
           
            var coin_message = `@BLK: $${(blinkusd*myblk).toFixed(2)} | @BLK: ${blinkPrice}`+"\n"+
                                `=======================`+"\n"+
                                `@BAND: $${bandprice}`+"\n"+
                                `@BTC:  $${btcprice}`+"\n"+
                                `@RBTC: $${rbtcprice}`+"\n"+
                                `@BNB: $${bnbprice}`+"\n"+
                                `@ETH: $${ethprice}`+"\n"+
                                `@SOV: ${sovprice} sat | USD: $${sovusd.toFixed(2)}`


            lineNotify.notify({
                message: coin_message,
            }).then(() => {
                console.log(coin_message);
            }); 
 
        });
  });
  });
  });
  });
  });
  })
}

var waitTime = 30 * 60 * 1000; // = 30min.
setInterval(() => {
    getprice()
}, waitTime);
