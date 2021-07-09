<template>
	<view class="content">
		<image class="topImg" src="cloud://onehands-8gt9feadad3b9139.6f6e-onehands-8gt9feadad3b9139-1306243526/UI/home/top.jpeg" mode="widthFix"></image>
		<view class="top_btn">
			<image src="cloud://onehands-8gt9feadad3b9139.6f6e-onehands-8gt9feadad3b9139-1306243526/UI/home/代扔服务.png" mode="widthFix"></image>
		</view>
		<view class="bottom_btn">
			<image class="leftImg" src="cloud://onehands-8gt9feadad3b9139.6f6e-onehands-8gt9feadad3b9139-1306243526/UI/home/预约回收.png" mode="widthFix"></image>
			<image class="rightImg" src="cloud://onehands-8gt9feadad3b9139.6f6e-onehands-8gt9feadad3b9139-1306243526/UI/home/大客户订单.png" mode="widthFix"></image>
		</view>
		<view class="ad_img">
			<image src="cloud://onehands-8gt9feadad3b9139.6f6e-onehands-8gt9feadad3b9139-1306243526/UI/home/广告图.png" mode="widthFix"></image>
		</view>
		<view class="step_img">
			<image src="cloud://onehands-8gt9feadad3b9139.6f6e-onehands-8gt9feadad3b9139-1306243526/UI/home/回收流程.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import {getUserInfo} from '../../utils/wxUtil.js';
	const db = wx.cloud.database()
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
		},
		methods: {
			getUserInfo(){
				getUserInfo()
			}
		}
	}
</script>

<style lang="scss">
	.topImg{
		width: 100vw;
	}
	.top_btn{
		display: flex;
		justify-content: center;
		
		image{
			width: 90vw;
		}
	}
	.bottom_btn{
		display: flex;
		justify-content: center;
		margin-top: 30rpx;
		.leftImg{
			width: 42.5vw;
			margin-right: 2.5vw;
		}
		.rightImg{
			width: 42.5vw;
			margin-left: 2.5vw;
		}
	}
	.ad_img{
		display: flex;
		justify-content: center;
		margin-top: 30rpx;
		image{
			width: 90vw;
		}
	}
	.step_img{
		display: flex;
		justify-content: center;
		margin-top: 30rpx;
		image{
			width: 90vw;
		}
	}
	.content{
		padding-bottom: 50rpx;
	}
	
</style>
