/**
 *  时间转换工具类
 * @param {string} date - 时间戳
 * @param {string} fmt -  转换格式
 * @returns  {string}
 * @inner
 * @example
 * formatDate(new Date())
 * 2023-06-07 13:43:01
 * console.log(formatDate(new Date()))
 */
export const formatDate = (date, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  if (typeof date === 'string') {
    return date
  }
  date = new Date(date)
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }

  if (!date || date == null) return null

  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
