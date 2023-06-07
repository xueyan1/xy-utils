/**
 * @link
 *
 *
 */
import wx from 'weixin-sdk-js'
/**
 * @returns {boolean}
 * @description 判断是否在小程序环境
 */
export function isApplet() {
  return window.__wxjs_environment === 'miniprogram' // 小程序环境
}

/**
 * @param {string} appId - 跳转的小程序appId
 * @param {string} appPagePath -跳转的小程序路径
 * @param {string} navigateType-navigateTo [navigateTo, ] -跳转方式
 * @description 小程序跳转路径
 */
export function navigateToApplet({ appId, appPagePath, navigateType = 'navigateTo' }) {
  let path = appPagePath
  if (appId) {
    path = `/pages/tabbar/not-found/not-found?appId=${appId}&path=${appPagePath}`
    wx.miniProgram[navigateType]({
      url: path
    })
  } else {
    wx.miniProgram[navigateType]({
      url: path
    })
  }
}
