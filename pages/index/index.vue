<template>
	<view class="content">
		<u-button >默认按钮</u-button>
		<u-button type="primary">主要按钮</u-button>
		<u-button type="success">成功按钮</u-button>
		<u-button type="info">信息按钮</u-button>
		<u-button type="warning">警告按钮</u-button>
		<u-button type="error">危险按钮</u-button>
	</view>
</template>

<script>
	const db = wx.cloud.database()
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			db.collection('test').doc('28ee4e3e60e1806f279de3f82108dc79').get()
			.then(res=>{
				console.log(res)
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	
</style>
