import dateUtil from 'element-ui/src/utils/date';

export const formatNumRate = function (num) {
  if (num == 0) {
    return '0';
  }
  return formatNum(num * 100) + '%';
}
/* 99999 ==> 99.999 */
export const formatNum = function (num) {
  if (!num) {
    return '0';
  }
  var str = num.toString();
  var newStr = "";
  var count = 0;
  if (str.indexOf(".") == -1) {
    for (var i = str.length - 1; i >= 0; i--) {
      var currentChar = str.charAt(i);
      if (count % 3 == 0 && count != 0 && currentChar != '-') {
        newStr = currentChar + "," + newStr;
      } else {
        newStr = currentChar + newStr;
      }
      count++;
    }
    return newStr;
  } else {
    for (var i = str.indexOf(".") - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newStr = str.charAt(i) + "," + newStr;
      } else {
        newStr = str.charAt(i) + newStr; //逐个字符相接起来
      }
      count++;
    }
    return newStr + (str + "00").substr((str + "00").indexOf("."), 3);
  }
};
export const formatDate = function (date, format) {
  if (!date) return '';
  return dateUtil.format(date, format || 'yyyy-MM-dd');
};
