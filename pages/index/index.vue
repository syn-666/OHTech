<template>
	<view class="content">
		<image class="topImg" src="cloud://onehands-8gt9feadad3b9139.6f6e-onehands-8gt9feadad3b9139-1306243526/UI/home/top.jpeg" mode="widthFix"></image>
		<button type="default" @click="getUserInfo()">登录</button>
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
</style>
