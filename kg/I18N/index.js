import _ from 'lodash';
import ZH from './zh-cn';

let lang = 'zh-cn';

const _all = {
	'zh-cn' : ZH
};
const F = {
	init(config, callback=_.noop){
		if(config.defaultLanguage){
			lang = config.defaultLanguage;
		}

		_.each(config, (d, k)=>{
			if(!_all[k]){
				_all[k] = {};
			}

			_.extend(_all[k], d);
		});

		callback();
	},

	get(k){
		const v = _.get(_all[lang], k);
		if(!v){
			throw new Error('invalid key -> '+k);
		}
		return v;
	}
};

export default F;