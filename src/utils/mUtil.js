/**
 * @param {date} 标准时间格式:Fri Nov 17 2017 09:26:23 GMT+0800 (中国标准时间)
 * @param {type} 类型
 *   type == 1 ---> "yyyy-mm-dd hh:MM:ss.fff"
 *   type == 2 ---> "yyyymmddhhMMss"
 *   type == '' ---> "yyyy-mm-dd hh:MM:ss"
 */
export const formatDate = (date, type) => {
  var year = date.getFullYear(); //年
  var month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1; //月
  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(); //日
  var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); //时
  var minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //分
  var seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //秒
  var milliseconds =
    date.getMilliseconds() < 10
      ? "0" + date.getMilliseconds()
      : date.getMilliseconds(); //毫秒
  if (type == 1) {
    return (
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hour +
      ":" +
      minutes +
      ":" +
      seconds +
      "." +
      milliseconds
    );
  } else if (type == 2) {
    return (
      year + "" + month + "" + day + "" + hour + "" + minutes + "" + seconds
    );
  } else if (type == 3) {
    return year + "-" + month + "-" + day;
  } else {
    return (
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hour +
      ":" +
      minutes +
      ":" +
      seconds
    );
  }
};
/**
 * 时间转换：2021-10-29T03:36:33.537Z --> '2015-01-01 01:01:01'
 */
export const parseToDate = (timeValue) => {
  var result = "";
  var year = timeValue.substr(0, 4);
  var month = timeValue.substr(5, 2);
  var date = timeValue.substr(8, 2);
  var hour = (parseInt(timeValue.substr(11, 2)) + 8).toString();
  var minute = timeValue.substr(14, 2);
  var second = timeValue.substr(17, 2);
  result =
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
  return result;
};
