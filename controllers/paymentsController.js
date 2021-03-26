const Campaign = require('../models/campaignModel')

var ResMsgDTO = require('../ResMsgDTO.js');
var ReqMsgDTO = require('../ReqMsgDTO.js');
var VtransactSecurity = require('../VtransactSecurity.js');
var HTTPPost = require('../HTTPPost.js');
var AWLMEAPI = require('../AWLMEAPI.js');

var bodyParser = require('body-parser')

var reqMsgDTO = new ReqMsgDTO();
var resMsgDTO = new ResMsgDTO();
var transactMeAPI = new AWLMEAPI();
var vTransactSecurity = new VtransactSecurity();
const fs = require('fs');
const ini = require('ini');
const ini_array = ini.parse(fs.readFileSync('./ClientAPI.ini', 'utf-8'));

exports.payAmount = async function(req, res, next) {
    try{

    const clientId = req.session.user.id    
    const myplan = await Campaign.find({clientId, payment_done: "no"})

        //console.log(myplan[0].seo)
        
        console.log(myplan)
        var mid = "";
    if (req.body.mid != null) {
        mid = req.body.mid;
        // console.log(mid);
        reqMsgDTO.setMid(mid);
    } else {
        mid = PaytmConfig.mid;
        reqMsgDTO.setMid(mid);
    }
        console.log("mid: " + mid)
    // Merchant Encryption key 
    var enckey = "";
    if (req.body.encKey != null) {
        enckey = req.body.encKey;
        reqMsgDTO.setEnckey(enckey);
    } else {
        enckey = PaytmConfig.enckey;
        reqMsgDTO.setEnckey(enckey);
    }console.log("enckey " + enckey)
    //Merchant unique order id 
    var orderId = "";
    if (req.body.hdnOrderID != null) {
        orderId = myplan[0]._id;
        reqMsgDTO.setOrderId(orderId);
    }console.log("orderId: " + orderId)
    // Transaction amount in paisa format
    var amt = myplan[0].total;
    reqMsgDTO.setTrnAmt(amt);
    console.log("amt: " + amt)
    // Merchant transaction currency 
    reqMsgDTO.setTrnCurrency(req.body.currency);
    console.log(req.body.currency)
    // Transaction remarks 
    var trnRemarks = null;
    if (req.body.trnRemarks != null) {
        trnRemarks = req.body.trnRemarks;
        reqMsgDTO.setTrnRemarks(trnRemarks);
    }
    // Merchant request type S/P/R 
    var meTransReqType = null;
    if (req.body.meTransReqType != null) {
        meTransReqType = req.body.meTransReqType;
        reqMsgDTO.setMeTransReqType(meTransReqType);
    }
    // Recurring period (M/W))if merchant request type is R
    var recurPeriod = null;
    if (req.body.recPeriod != null) {
        recurPeriod = req.body.recPeriod;
        reqMsgDTO.setRecurrPeriod(recurPeriod);
    }
    //Recurring day if merchant request type is R: Recurring Payment 
    var recurDay = null;
    if (req.body.recDay != null) {
        recurDay = req.body.recDay;
        reqMsgDTO.setRecurrDay(recurDay);
    }
    //No of recurring if merchant request type is R 
    var numberRecurring = null;
    if (req.body.noOfRec != null) {
        numberRecurring = req.body.noOfRec;
        reqMsgDTO.setNoOfRecurring(numberRecurring);
    }
    //Merchant response URL 
    var ResponseUrl = null;

    if (req.body.resUrl != null) {
        ResponseUrl = req.body.resUrl;
        reqMsgDTO.setResponseUrl(ResponseUrl);
    } else {
        ResponseUrl = PaytmConfig.website;
        reqMsgDTO.setResponseUrl(ResponseUrl);
    }
    console.log(ResponseUrl)

    //Optional Addition fields for Merchant use 
    reqMsgDTO.setAddField1(req.body.addField1);
    reqMsgDTO.setAddField2(req.body.addField2);
    reqMsgDTO.setAddField3(req.body.addField3);
    reqMsgDTO.setAddField4(req.body.addField4);
    reqMsgDTO.setAddField5(req.body.addField5);
    reqMsgDTO.setAddField6(req.body.addField6);
    reqMsgDTO.setAddField7(req.body.addField7);
    reqMsgDTO.setAddField8(req.body.addField8);
    reqMsgDTO.setAddField9("");
    reqMsgDTO.setAddField10("");
    reqMsgDTO.setStatusDesc("")
        // console.log('test');
    var merchantRequest = null;
    try {
        // Initialise object to generate transaction request message AWLMEAPI 
        // var transactMeAPI = new AWLMEAPI();
        reqMsgDTO = transactMeAPI.generateTrnReqMsg(reqMsgDTO);
        // Check status desciption for message generation 
        if (reqMsgDTO.getStatusDesc() == "Success") {
            merchantRequest = reqMsgDTO.getReqMsg();
            // console.log(merchantRequest);
            // var txn_url = "https://cgt.in.worldline.com/ipg/doMEPayRequest"; // for staging
            var txn_url = ini_array.STD_PAY;
            var form_fields;
            form_fields = "<input type='hidden' name='merchantRequest'  value='" + merchantRequest + "' >";
            form_fields += "<input type='hidden' name='MID' id = 'MID' value = '" + mid + "'/>";

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
            res.end();
        }
        // merchantRequest = reqMsgDTO.getReqMsg();
        // res.send(merchantRequest + ' Submitted Successfully!');
    } catch (ex) {
        reqMsgDTO.setStatusDesc("Error Occurred during processing" + ex);
        console.log(ex)
            // throw new Exception(ex.getMessage());
    } // If request message generate

    }
    catch(err) {
        console.log(err)
    }

    
    }


    exports.getResponse = async function(req, res) {

        try{
            // Parse Merchant encryption to parse PG response message 
        var merchantResponse = null;
    
        resMsgDTO = null;
        if (req.body.merchantResponse != null) {
            // Merchant Encryption Key var 
            // console.log(req.body.merchantResponse);
            // var enc_key = "3699a6289277c23e8efa6ba12c3bb517";
            var enc_key = ini_array.enyckey;
            // console.error('enc_key ' + enc_key)
            // Get PG transaction response 
            merchantResponse = req.body.merchantResponse;
            // Initialise object to parse response message
            //AWLMEAPI transactMeAPI = new AWLMEAPI();
            // Call method to parse PG transaction response 
    
            // console.log(merchantResponse);
            resMsgDTO = await transactMeAPI.parseTrnResMsg(merchantResponse, enc_key);
    
            // console.log('resMsgDTO.getRrn()');
            var varAddField1 = resMsgDTO.getAddField1();
            var varAddField2 = resMsgDTO.getAddField2();
            var varAddField3 = resMsgDTO.getAddField3();
            var varAddField4 = resMsgDTO.getAddField4();
            var varAddField5 = resMsgDTO.getAddField5();
            var varAddField6 = resMsgDTO.getAddField6();
            var varAddField7 = resMsgDTO.getAddField7();
            var varAddField8 = resMsgDTO.getAddField8();
            var varAddField9 = resMsgDTO.getAddField9();
            var varAddField10 = resMsgDTO.getAddField10();
            var varAuthZCode = resMsgDTO.getAuthZCode();
            var varOrderId = resMsgDTO.getOrderId();
            var varResponseCode = resMsgDTO.getResponseCode();
            var varRrn = resMsgDTO.getRrn();
            var varStatusDesc = resMsgDTO.getStatusDesc();
            var varTrnAmt = resMsgDTO.getTrnAmt();
            var varTrnRefNo = resMsgDTO.getPgMeTrnRefNo();
            var varTrnReqDate = resMsgDTO.getTrnReqDate();
        } else {
            merchantResponse = "No response";
        }
    
        // res.sendFile('meTrnSuccess.html', { root: '.' })
        res.render('meTrnSuccess', {
            AddField1: varAddField1,
            AddField2: varAddField2,
            AddField3: varAddField3,
            AddField4: varAddField4,
            AddField5: varAddField5,
            AddField6: varAddField6,
            AddField7: varAddField7,
            AddField8: varAddField8,
            AddField9: varAddField9,
            AddField10: varAddField10,
            AuthZCode: varAuthZCode,
            OrderId: varOrderId,
            ResponseCode: varResponseCode,
            Rrn: varRrn,
            StatusDesc: varStatusDesc,
            TrnAmt: varTrnAmt / 100.0,
            TrnRefNo: varTrnRefNo,
            TrnReqDate: varTrnReqDate
    
        });
        }

        catch(err) {
            console.log(err)
        }

    }

        
    
