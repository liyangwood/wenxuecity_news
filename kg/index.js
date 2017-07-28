import _ from 'lodash';
import moment from 'moment';

const debug = __DEV__;

const KG = {
    _,
    moment
};

KG.log = (log)=>{
    if(debug){
        console.log('[LOG] - ' + log);
    }

};

export default KG;