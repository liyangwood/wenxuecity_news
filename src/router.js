import MainContainer from 'app/module/main/MainContainer';
import NewsDetail from 'app/module/news/NewsDetailContainer';

const F = {
	main : {
		path : 'main',
		screen : MainContainer,
		statusBar : {
			show : true
		},
		navigationOptions : {
			gesturesEnabled : false
		}
	},
	news_detail : {
		path : 'news_detail',
		screen : NewsDetail,
		statusBar : {
			show : true
		}
	}
};
export default F;