import VConsole from 'vconsole'
/** 开启微信调试模式
 * @param {string}  [env=dev]   生产环境不开启调试
 * @returns  new VConsole
 * @inner
 * @function
 */
export function openVConcole(env) {
  if (!env.startsWith('prod')) {
    return new VConsole()
  }
}
