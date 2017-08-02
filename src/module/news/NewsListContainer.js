import React from 'react';
import {createContainer, goPath} from "lib";
import data from 'app/data';
import {Spinner, Container, Header} from 'native-base';
import NewsList from './NewsList';
import {News} from 'app/data/class';
import {_} from 'kg';

const C = class extends React.Component{
	constructor(p){
		super(p);
		this.state = {
			loading : true
		};
	}

	render(){
		return (
			<Container>
				<Header />
				{
					this.state.loading ?
						(
							<Spinner color="green" />
						)
						:
						(
							<NewsList {...this.props} />
						)
				}
			</Container>

		);
	}

	async componentDidMount(){
		await this.props.getNewsList();
		this.setState({loading : false});
	}
};

export default createContainer(C, (state)=>{

	const list = state.news.news_list;
	let lastID = null;
	if(_.size(list)>0){
		lastID = new News(_.last(list))._get('postid')
	}

	return {
		list : state.news.news_list,
		lastID
	};
}, (dispatch)=>{
	return {
		getNewsList : async ()=>{
			return await data.method.news.setNewsList(dispatch);
		},
		getMoreList : async (lastID)=>{
			if(lastID){
				return await data.method.news.setNewsListMore(dispatch, lastID);
			}

		},
		goToDetail : async (newsID)=>{

			await data.method.news.setNewsDetail(newsID, dispatch);
			console.log(newsID)
			goPath('news_detail');
		}
	}
});