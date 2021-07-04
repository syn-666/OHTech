<template>
	<view class="content">
		<image class="logo" src="../../static/logo.png" mode="widthFix"></image>
		<button class="login" type="primary" open-type="getPhoneNumber" @click="getPhoneNumber()">登录</button>
		<button class="phone" type="primary" open-type="getPhoneNumber" @click="getPhoneNumber()">手机号</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		onLoad: () => {
			
		},
		methods: {
			getPhoneNumber(event){
				let cloudID = event.detail.cloudID
					wx.cloud.callFunction({
					name: 'getPhone',
					data: {
					  cloudID: cloudID
					}
				}).then(res => {
					app.hideLoading()
			
					let phone = res.result.list[0].data.phoneNumber
			
					if (phone) {
					  wx.setStorageSync('phone', phone)
			
					  //更新UI
					  this.setData({
						phone: phone
					  })
					}
					
					this.triggerEvent('applyTap')
				}).catch(error => {
					app.hideLoading()
					this.triggerEvent('applyTap')
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height:100vh;
		.logo{
			margin-top: -500rpx;
			width:200rpx;
		}
		.login{
			margin: 100rpx 0 0 0;
			width:65vw;
		}
		.phone{
			margin:20rpx 0 ;
			width:65vw;
		}
		
	}
</style>
