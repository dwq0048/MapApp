module.exports = {
	publicPath: '',
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "~@/assets/css/variables.scss";`
			}
		}
	},
	pluginOptions: {
		cordovaPath: 'src-cordova'
	}
}
