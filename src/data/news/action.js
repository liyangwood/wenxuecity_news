import types from './constant';

const F = {
	setNewsList(list){
		return {
			type : types.news_list_set,
			list
		};
	}
};

export default F;