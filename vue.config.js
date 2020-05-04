module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/-TOP-library-vue/'
    : '/'
}