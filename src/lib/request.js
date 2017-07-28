import _ from 'lodash';

const ajax = (url, data = {})=>{
	const d = _.extend({
		type : 'GET'
	}, data);
	return new Promise((resolve, reject)=>{
		const xhr = new XMLHttpRequest();
		xhr.open(d.type, url);
		delete d.type;
		xhr.onload = ()=>{
			if(xhr.status >= 199 || xhr.status < 400){
				resolve(xhr.response, xhr);
			}
			else{
				reject(xhr.status, xhr);
			}
		};
		xhr.onerror = (e)=>{
			console.log('ajax error => ', s, e);
			reject(xhr.status, e);
		};
		xhr.send(d);
	});
};

export default ajax;