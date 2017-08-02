import KG, {_} from 'kg';
import request from 'lib/request';
import config from 'app/config';

const channel = ()=>{
	const data = {
		act : 'channel'
	};

	return data;

};


const F = {
	init : async ()=>{

		KG.log('api init success');
	},

	request : async (method, param, success, error)=>{
		let data = {};
		switch(method){
			case 'channel':
				data = channel();
				break;
			case 'index':
				data = {
					act : 'index',
					channel : 'news',
					pagesize : 25,
					version : 2
				};
				break;
			case 'list':
				data = {
					act : 'list',
					channel : 'news',
					lastID : param.lastID,
					pagesize : 25,
					version : 2
				};
				break;
			case 'view':
				data = {
					act : 'view',
					channel : 'news',
					id : param.ID
				};
				break;
		}

		try{
			const res = await request(config.SERVER_URL, data);
			return res;
		}catch(e){
			alert(e);
		}

	}
};

export default F;