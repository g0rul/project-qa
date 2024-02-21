'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    let input = req.query.input.toLowerCase();
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)

    let returnObj = {
      "initNum": initNum,
      "initUnit": initUnit,
      "returnNum": returnNum,
      "returnUnit": returnUnit,
      "string": toString
    };
    
    if (initNum == 'invalid number' && initUnit == 'invalid unit') {
    res.json( 'invalid number and unit' );
    }

    if (initNum == 'invalid number') {
    res.json('invalid number');
    }
    if (initUnit == 'invalid unit') {
    res.json('invalid unit');
    }


    /*if (initNum == 'invalid number' && initUnit == 'invalid unit') {
      res.json('invalid number and unit');
    }

    if (initNum == 'invalid number') {
      res.json('invalid number');
    }
    if (initUnit == 'invalid unit') {
      res.json('invalid unit');
    }*/


    //res json
    res.json(returnObj);

  })
};
