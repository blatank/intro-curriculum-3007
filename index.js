'use strict';

/**
 * 整数が17で割りきれるかどうかを判定する
 * @param {integer} num 
 */
function isMultipleOfSeventeen(num) {
    return ((num % 17) === 0);
}

module.exports = {
    isMultipleOfSeventeen
};
