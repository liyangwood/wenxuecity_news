import types from './constant';

const initState = {
	news_list : []
};

export default (state=initState, action)=>{
	switch(action.type){
		case types.news_list_set:
			return {
				...state,
				news_list: action.list
			};
		default :
			return state;
	}

};