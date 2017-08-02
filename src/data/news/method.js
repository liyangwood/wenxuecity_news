import action from './action';
import api from 'api';
import _ from 'lodash';


const F = {
	async setNewsList(dispatch=false){
		const res = await api.request('index');
		const list = _.values(res.list);
		dispatch && dispatch(action.setNewsList(list));
		return list;
	},

	async setNewsListMore(dispatch, lastID){
		const res = await api.request('list', {lastID});
		const list = _.values(res.list);
		dispatch && dispatch(action.setNewsListMore(list));
		return list;
	},

	async setNewsDetail(detailID, dispatch){
		dispatch(action.setNewsDetail(detailID));

		if(detailID){
			const res = await api.request('view', {ID : detailID});
			dispatch(action.setNewsData(detailID, res));
		}

	}
};

export default F;