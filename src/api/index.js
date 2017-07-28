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
		await F.request('news', {});

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
		}

		try{
			const res = await request(config.SERVER_URL, data);
			KG.log(_.values(res));
		}catch(e){
			alert(e);
		}

	}
};

export default F;