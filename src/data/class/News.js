import Base from './Base';

export default class extends Base{
	format(type, param=false){
		switch(type){
			case 'image':
				return this._getImage();
		}

		return super.format(type, param);
	}

	_getImage(){
		const {images} = this.variables;

		return this.first(images);
	}


}