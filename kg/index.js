import _ from 'lodash';
import moment from 'moment';
import I18N from './I18N';

const debug = __DEV__;

export {
	_,
	moment,
	I18N
};

const KG = {};
KG.log = (log)=>{
	if(debug){
		console.log('[LOG] - ' + (_.isString(log)?log:JSON.stringify(log)));
	}

};

export default KG;