import wx from 'weixin-sdk-js'

/**
 * @returns {boolean} true, false
 * @function isAppletEnv
 * @summary 判断是否在小程序环境
 */
export const isAppletEnv = () => {
  return window.__wxjs_environment === 'miniprogram' // 小程序环境
}

/**
 * @summary 跳转到i福田小程序， 打开第三方小程序
 * @param {string} appId - 跳转的小程序appId， 可不传，直接跳转i福田小程序路径
 * @param {string} appPagePath -跳转的小程序路径
 * @param {string} [navigateType=navigateTo] - 跳转方式: navigateTo ,switchTab,reLaunch,redirectTo
 * @function navigateToApplet
 */
export const navigateToApplet = (appId, appPagePath, navigateType = 'navigateTo') => {
  let path = decodeURIComponent(appPagePath)
  path = appId ? `/pages/tabbar/not-found/not-found?appId=${appId}&path=${path}` : path
  wx.miniProgram[navigateType]({
    url: path
  })
}
