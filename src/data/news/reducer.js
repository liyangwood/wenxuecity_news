import types from './constant';
import {_} from 'kg';

const initState = {
	news_list : [],
	detail : null,
	detailMap : {}
};

export default (state=initState, action)=>{
	switch(action.type){
		case types.news_list_set:
			return {
				...state,
				news_list: action.list
			};
		case types.news_list_set_more:
			return {
				...state,
				news_list : _.concat(state.news_list, action.list)
			};
		case types.news_detail_set:
			return {
				...state,
				detail : action.detail
			};
		case types.news_detail_map_set:
			const map = _.clone(state.detailMap);
			map[action.id] = action.data;
			return {
				...state,
				detailMap : map
			};
		default :
			return state;
	}

};