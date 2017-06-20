/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palNumber = 0;
  let palReverse;
  let palArray;

    if (digits === 2){
      for (let i = 99; i >=10; i--){
        factor_0 = i;
        for (let j = 99; j>=10; j--){
          factor_1 = j;
          palNumber = factor_0 * factor_1;
          palArray = palNumber.toString().split("").join();
          palReverse = palNumber.toString().split("").reverse().join();
          if (palArray === palReverse){
            palNumber = palArray;
            console.log(palNumber);
        }
      }
        }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palNumber : palNumber,
  };
};

let palCheck = module.exports(2);
console.log(palCheck);
console.log(palCheck.palNumber);


