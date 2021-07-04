<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			if(!wx.cloud){
				console.error('请使用 2.2.3 或以上的基础库以使用云能力')
			}else{
				wx.cloud.init({
					traceUser: true,
					env: 'onehands-8gt9feadad3b9139'
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
