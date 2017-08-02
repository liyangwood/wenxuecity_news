import api from 'api';
import data from 'app/data';
import KG, {I18N} from 'kg';
import i18nconfig from 'app/i18n';

I18N.init(i18nconfig, ()=>{
	KG.log('I18N init success');
});
api.init();
data.init();