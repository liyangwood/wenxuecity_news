import action from './action';
import api from 'api';
import _ from 'lodash';


const F = {
	async setNewsList(dispatch){
		const res = await api.request('index');
		const list = _.values(res.list);
		console.log(list);
		dispatch(action.setNewsList(list));
	}
};

export default F;