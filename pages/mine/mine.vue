<template>
	<view class="content">
		<u-popup v-model="show" mode="bottom" border-radius="20" height="400" :mask-close-able="false">
			<view class="top">
				<view class="pop_avatar">
					<open-data type="userAvatarUrl"></open-data>
				</view>
				<view class="pop_nickName">
					Hi,<open-data type="userNickName"></open-data>
				</view>
			</view>
			<view class="pop_login">
				<view class="btn" @click="auth" v-if="!isLogin">授权</view>
				<view class="btn" @click="login" v-else>微信用户一键登录</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {getUserInfo,showToast} from '../../utils/wxUtil.js'
	import {insert,select,deleteUser} from '../../utils/userApi.js'
	export default {
		data() {
			return {
				show:true,
				isLogin:false,
				userInfo:{},
				user_id:null,
			}
		},
		onLoad(options){
			
			this.selectUser()
						
			
			
		},
		methods: {
			//授权
			async auth(){
				let self = this;
				let res = await getUserInfo();
				if(res.errMsg == 'getUserProfile:ok'){
					//生成用户id(customer_id)
					let id = self.$u.guid(16,false,15);
					//添加数据库
					insert({
						customer_id: id,
						nickName: res.userInfo.nickName,
						avatarUrl: res.userInfo.avatarUrl
					}).then((res1)=>{
						//打开一键登录按钮
						self.isLogin = true;
						//存入属性到userinfo
						self.userInfo = {}
						self.userInfo['customer_id'] = id;
						self.userInfo['nickName'] = res.userInfo.nickName
						self.userInfo['avatarUrl'] = res.userInfo.avatarUrl
						//存入缓存
						uni.setStorageSync('userInfo',self.userInfo);
						//隐藏加载中
						// uni.hideLoading();
					}).catch((err)=>{
						//存入缓存失败,删除远程数据
						deleteUser({
							customer_id: id
						})
						showToast('授权失败,请检查网络后重试!','none')
					})
				}
			},
			
			//判断用户是否第一次进入小程序(可能存在换手机情况.所以判断了缓存还要判断数据库)
			selectUser(){
				let self = this;
				let _openid = null;
				//先搜索缓存中数据有无userInfo
				this.userInfo = uni.getStorageSync('userInfo')
				//没有则从数据库中搜索
				if(!this.userInfo){
					wx.cloud.callFunction({
						name: 'getOpenId'
					}).then((res)=>{
						_openid = res.result.openid;
						select({
							_openid: _openid
						}).then((res)=>{
							//返回用户信息赋值给userInfo
							this.userInfo = res.data[0]
							//判断数据库中是否存在用户信息,没有则直接返回,需要去授权注册
							if(!this.userInfo){	
								return;
							}
							//存入缓存
							uni.setStorageSync('userInfo',this.userInfo)
							//判断是否录入手机号,没有则需要打开微信一键登录按钮
							if(!this.userInfo.phone){
								this.show = true//显示弹窗
								this.isLogin = true//显示微信用户一键登录按钮
							}else{
								this.show = false
							}
						})
					})
				}else{
					//有缓存,说明之前已经授权,已经存入数据库
					if(!this.userInfo.phone){
						this.show = true
						this.isLogin = true//显示微信用户一键登录按钮
					}else{
						this.show = false
					}
				}
				
				
			},
			
			//登录
			login(){
				this.show = false
			}
			
			
		}
	}
</script>

<style lang="scss">
	.top{
		display: flex;
		font-weight: bold;
		margin: 20rpx;
		.pop_avatar{
			display: flex;
			justify-content: center;
			width: 100rpx;
			height: 100rpx;
			border-radius: 50rpx;
			overflow: hidden;
			margin: 20rpx;
		}
		.pop_nickName{
			margin: 20rpx;
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
		}
	}
	
	.pop_login{
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
		.btn{
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #4CD964;
			border-radius: 20rpx;
			width: 400rpx;
			height: 80rpx;
			color: #FFFFFF;
		}
	}
	
	u-popup{
		overflow-y: scroll;
	}
</style>
