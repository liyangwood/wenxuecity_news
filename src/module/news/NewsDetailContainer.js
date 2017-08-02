import React from 'react';
import {createContainer} from "lib";
import NewsDetail from './NewsDetail';

export default createContainer(NewsDetail, (state)=>{
	return {
		newsID : state.news.detail
	}
});