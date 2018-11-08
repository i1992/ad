var express = require('express');
var router = express.Router();
var xml2js = require('xml2js');
var builder = new xml2js.Builder();
const BigQuery = require('@google-cloud/bigquery');
const axios = require('axios');
var parser = require('xml2json');
var options = {explicitArray: false, tagNameProcessors: [xml2js.processors.stripPrefix] };

router.get('/:id/:zip', function(req, res, next) {
  google(req.params.id, req.params.zip)
    .then((result) => {
      res.send({ data : result });
    });
});

var myurl = "https://ws.fedex.com:443/web-services";
function google(n,z){
  var newdata ;
  return new Promise(function(resolve, reject) {
    var json;
    const bigquery = new BigQuery({
      projectId: "fivetran-bcp-warehouse",
      keyFilename: "./src/server/key.json"
    });
    var sqlQuery = `SELECT * FROM \`fivetran-bcp-warehouse.Looker_clean_source.sales_order_tracking_number\` where marketplace_order_id = "${n}" and ship_zip = "${z}"`;
      return bigquery.createQueryStream(sqlQuery)
        .on('error', console.error)
        .on('data', function(rows) {
          newdata = rows;
        })
        .on('end', function() {
          if(newdata == " " || newdata == undefined || newdata == null){
            resolve("Awww");
          }else{
            var order = newdata.tracking_number;
            var zip = newdata.ship_zip;
            var bn = order.split(',');
             var data = `<ns1:Envelope xmlns:ns1="http://schemas.xmlsoap.org/soap/envelope/"> <ns1:Body> <ns2:TrackRequest xmlns:ns2="http://fedex.com/ws/track/v12"><ns2:WebAuthenticationDetail><ns2:UserCredential> <ns2:Key>SKPcHXoiCMVwMRaI</ns2:Key> <ns2:Password>3BBoTDDYo15BB5M6OWMv2Ipum</ns2:Password></ns2:UserCredential> </ns2:WebAuthenticationDetail> <ns2:ClientDetail> <ns2:AccountNumber>114090638</ns2:AccountNumber><ns2:MeterNumber>113107445</ns2:MeterNumber></ns2:ClientDetail> <ns2:TransactionDetail>  <ns2:CustomerTransactionId>1</ns2:CustomerTransactionId></ns2:TransactionDetail><ns2:Version><ns2:ServiceId>trck</ns2:ServiceId> <ns2:Major>12</ns2:Major><ns2:Intermediate>0</ns2:Intermediate><ns2:Minor>0</ns2:Minor> </ns2:Version><ns2:SelectionDetails> <ns2:PackageIdentifier><ns2:Type>TRACKING_NUMBER_OR_DOORTAG</ns2:Type> <ns2:Value>${bn[0]}</ns2:Value> </ns2:PackageIdentifier> </ns2:SelectionDetails> <ns2:ProcessingOptions>INCLUDE_DETAILED_SCANS</ns2:ProcessingOptions> </ns2:TrackRequest> </ns1:Body></ns1:Envelope>`
              axios.post(myurl, data, {
                  headers: {
                    "Content-Type": "application/xml",
                    "cache-control": "no-cache"
                  }
                })
                .then(function (response) {
                  var soap = response.data;
                  xml2js.parseString(soap, options, (err, result) => {
                    var soapBody = result.Envelope.Body;
                    var soapBodyXML = builder.buildObject(soapBody);
                    json = parser.toJson(soapBodyXML);
                    resolve([json, order,zip]);
                  });
              });
          }
        });
  });
}
module.exports = router;
