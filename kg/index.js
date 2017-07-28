import _ from 'lodash';
import moment from 'moment';

const debug = __DEV__;

export {
	_,
	moment
};

const KG = {};
KG.log = (log)=>{
	if(debug){
		console.log('[LOG] - ' + (_.isString(log)?log:JSON.stringify(log)));
	}

};

export default KG;