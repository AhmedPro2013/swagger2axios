import request from '@/plugins/axios'

//host:api.github.com

export function getMeta(){
 return request({url: `http://api.github.com/meta`,method:'get',}).then(res => {
		return res.data
	})}