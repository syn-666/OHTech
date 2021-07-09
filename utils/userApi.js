const db = wx.cloud.database();
const col = db.collection('customer')

export const insert = (param) => {
	return new Promise((resolve,reject)=>{
		col.add({
			data:{
				...param,
			}
		}).then((res)=>{
			resolve(res);
		}).catch((err)=>{
			reject(err);
		})
	})
}

export const select = (param) =>{
	return new Promise((resolve,reject)=>{
		col.where({
			...param
		}).get()
		.then((res)=>{
			resolve(res)
		}).catch((err)=>{
			reject(err)
		})
	})
}

export const deleteUser = (param) =>{
	return new Promise((resolve,reject) => {
		col.where({
			...param,
		}).remove()
		.then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}