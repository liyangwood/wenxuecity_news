import React from 'react';
import {createContainer, goPath} from "lib";
import NewsDetail from './NewsDetail';
import data from 'app/data';

export default createContainer(NewsDetail, (state)=>{
	const ID = state.news.detail;
	const data = state.news.detailMap[ID];
	return {
		newsID : state.news.detail,
		data
	}
}, (dispatch)=>{
	return {
		goBack : async ()=>{
			await data.method.news.setNewsDetail(null, dispatch);
			goPath('main', 'back');
		}
	};
});