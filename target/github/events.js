import request from '@/plugins/axios'

//host:api.github.com

export function getEvents(){
 return request({url: `http://api.github.com/events`,method:'get',}).then(res => {
		return res.data
	})}