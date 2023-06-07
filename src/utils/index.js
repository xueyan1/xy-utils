/**
 * utils : 通用工具
 * @module  utils
 * @author xueyan
 * @name  通用工具
 */
/**
 * @name 日期转化
 * @see formatDate
 */
import * as date from './date'
/**
 * @name 打开Vconcole
 * @see openVConcole
 */
import * as vconsole from './console'

export default {
  ...date,
  ...vconsole
}
