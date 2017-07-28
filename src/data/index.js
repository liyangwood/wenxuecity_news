import initRedux from './redux';
import KG from 'kg';

import newsMethod from 'app/data/news/method';

const F = {
	init(){
		F.store = initRedux();

		F.method = {
			news : newsMethod
		};

		KG.log('data init success');
	}
};

export default F;