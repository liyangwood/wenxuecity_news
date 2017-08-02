import xml2js from 'react-native-xml2js';
import { connect } from 'react-redux';
import {_} from 'kg';

export const createContainer = (container, mapState, mapDispatch)=>{
	return connect(mapState, mapDispatch)(container);
};


export {
	xml2js
};

let _goPath = null;
export const goPath = (register)=>{
	if(_.isFunction(register)){
		_goPath = register;
	}
	else{
		if(!_goPath){
			throw new Error('Method goPath must be register first');
		}

		_goPath.apply(arguments);
	}

};
