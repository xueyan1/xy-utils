/*
 * @Author: 薛严 348352046@qq.com
 * @Date: 2023-06-05 18:34:47
 * @LastEditors: 薛严 348352046@qq.com
 * @LastEditTime: 2023-06-05 18:35:00
 * @FilePath: /xy-utils/.babelrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  presets: [
    ['@babel/preset-env', {
      // rollupjs 会处理模块，所以设置成 false
      modules: false
    }]
  ],
  plugins: [
  ]
}
