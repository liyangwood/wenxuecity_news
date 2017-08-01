import {_} from 'kg';
export default class {
	constructor(data={}){
		this.variables = data;

		this.id = data.id || '';
	}

	//need override
	format(){
		return null;
	}

	toData(){
		return this.variables;
	}

	first(d){
		if(_.isString(d)){
			return d;
		}
		else if(_.isObject(d)){
			if(d['item_0']){
				return d['item_0'];
			}
			else{
				return _.value(d);
			}
		}
	}

	_get(key){
		return _.get(this.variables, key);
	}
}
