export const getUserInfo = (res) => {
	uni.showLoading({
		title:'授权中',
		mask:true
	})
	return new Promise((resolve,reject)=>{
		uni.getUserProfile({
			desc:'获取用户基本信息',
			success: (res) => {
				showToast('授权成功','success');
				resolve(res)
			},
			fail: (err) => {
				showToast('授权失败,请重试','none');
				reject(err)
			},
			complete: () => {
				uni.hideLoading();
			}
		})
	})
}

export const showToast = (title,icon)=>{
	return new Promise((resolve,reject)=>{
		uni.showToast({
			title,
			icon,
			duration:2000,
			mask:true
		})
	})
}