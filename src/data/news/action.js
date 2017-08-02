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
	},

	setNewsDetail(detailID=null){
		return {
			type : types.news_detail_set,
			detail : detailID
		};
	},

	setNewsData(id, data){
		return {
			type : types.news_detail_map_set,
			id,
			data
		}
	}
};

export default F;