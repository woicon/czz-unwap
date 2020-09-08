const path = require('path')
const resolve = dir  => path.join(__dirname, dir)

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('pages', resolve('src/pages'))
      .set('images', resolve('src/assets/images'))
      .set('component', resolve('src/components'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('./src/assets/common.less'),
      ],
    },
  },
}