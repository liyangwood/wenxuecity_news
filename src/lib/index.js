import xml2js from 'react-native-xml2js';
import { connect } from 'react-redux';

export const createContainer = (container, mapState, mapDispatch)=>{
	return connect(mapState, mapDispatch)(container);
};

export {
	xml2js
};

