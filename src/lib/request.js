import _ from 'lodash';
import {xml2js} from 'lib';

const ajax = (url, data = {})=>{
	const d = _.extend({
		type : 'GET'
	}, data);
	return new Promise((resolve, reject)=>{

		const method = d.type;
		delete d.type;
		const data = {
			method,
			mode: 'cors'
		};
		if(method === 'GET'){
			url += '?';
			_.map(d, (v, k)=>{
				url += k+'='+v+'&';
			});
			url = url.replace(/&$/, '');
		}
		else{
			data.body = JSON.stringify(d);
		}

		fetch(url, data).then((resp)=>{
			if(resp.status >= 200){
				xml2js.parseString(resp._bodyText, (err, rs)=>{
					if(err){
						console.error(err);
						return;
					}
					resolve(rs.root, resp);
				});

			}

		}).catch((error)=>{
			console.log(error)
			reject(error);
		});

	});
};

export default ajax;