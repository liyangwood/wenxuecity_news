import types from './constant';

const F = {
	setNewsList(list){
		return {
			type : types.news_list_set,
			list
		};
	},
	setNewsListMore(list){
		return {
			type : types.news_list_set_more,
			list
		};
	}
};

export default F;