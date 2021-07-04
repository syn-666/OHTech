export const getUserInfo = (res) => {
	return new Promise((resolve,reject)=>{
		uni.getUserProfile({
			desc:'获取用户基本信息',
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}