//Este codigo esta bien no es compatible con FCC
function ConvertHandler() {

  this.getNum = function(input) {
    let result = input.replace(/[a-z]+/i, "");
    if (/\/.*\//.test(result) || /(\/\/)/.test(result)) {
      return 'invalid number';
    }
    //if (result.includes("/")) return Math.round(eval(result) * 100000) / 100000;
    if (result.includes("/")) {
    let nums = result.split("/");
    if (nums.length > 2) return 'invalid number';
    result = nums[0] / nums[1];
    }
    if (result == "") return 1;
    return Number(result);

    if (result.includes("/") && result.match(/\//g).length > 1) {
      return 'invalid number';
    }
    if (result == "") return 1;
    return result * 1;
  };

  this.getUnit = function(input) {
    let result = input.match(/[a-z]+/gi)[0];
    let units = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    if (!units.includes(result)) return 'invalid unit';
    if (result == 'l') return 'L';
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit) {
      case 'gal':
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      default:
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "L":
        result = "litres";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      default:
        break;
    }

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
   
    if (initNum == 'invalid number' && initUnit == 'invalid unit') {
    return 'invalid number and unit';
    }

    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        result = "error"
    }
    return Math.round(result * 100000) / 100000;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let firstUnit = this.spellOutUnit(initUnit);
    let secondUnit = this.spellOutUnit(returnUnit);
    let result = `${initNum} ${firstUnit} converts to ${returnNum} ${secondUnit}`;
    return result;
  };

}

module.exports = ConvertHandler;