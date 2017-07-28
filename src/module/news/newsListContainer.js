import React from 'react';
import {createContainer} from "lib";
import data from 'app/data';
import {ScrollView, Text} from 'react-native';


const C = class extends React.Component{
	constructor(p){
		super(p);
		this.state = {
			loading : false
		};
	}

	render(){
		return (
			<ScrollView>
				<Text>{JSON.stringify(this.props.list)}</Text>
			</ScrollView>
		);
	}

	async componentDidMount(){
		await this.props.getNewsList();
	}
};

export default createContainer(C, (state)=>{

	return {
		list : state.news.news_list
	};
}, (dispatch)=>{
	return {
		getNewsList : async ()=>{
			await data.method.news.setNewsList(dispatch);
		}
	}
});