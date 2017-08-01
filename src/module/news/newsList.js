import React from 'react';
import {Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner} from 'native-base';
import KG, {_} from 'kg';
import {News} from 'app/data/class';
// import GiftedListView from 'react-native-gifted-listview';
import {RefreshControl, View} from 'react-native';

const Component = class extends React.Component{
	constructor(p){
		super(p);
		this.state = {
			refresh : false,
			loadingMore : false
		};
	}
	render(){
		const p = {
			dataArray : this.props.list,
			renderRow : this.renderListItem,
			renderError : ()=>{},
			enableEmptySections : true,
			onEndReached : this.loadMore.bind(this),
			onEndReachedThreshold : 10,
			refreshControl : this.renderRefreshControl(),
			renderFooter : this.renderFooter.bind(this)
		};
		return (
			<Container>
				<List {...p} />
			</Container>
		);
	}

	loadMore(){
		if(this.state.loadingMore){
			return false;
		}
		this.setState({loadingMore : true});
		this.props.getMoreList(this.props.lastID).then(()=>{
			this.setState({loadingMore : false});
			KG.log('list size -> '+this.props.list.length);
		});
	}


	renderFooter(){
		if(!this.state.loadingMore) return null;
		return (
			<Content>
				<Spinner color="green" />
			</Content>
		);
	}

	renderRefreshControl(){
		const p = {
			refreshing : this.state.refresh,
			onRefresh : async ()=>{
				this.setState({refresh : true});
				const list = await this.props.getNewsList();
				this.setState({refresh : false});
			},
			tintColor : 'green',
			title : 'release to refresh',
			progressBackgroundColor : '#ccc'
		};

		return (
			<RefreshControl {...p} />
		);
	}

	renderListItem(d){

		const no = new News(d);
		const image = no.format('image');
		return (
			<ListItem>
				{image ? (

						<Thumbnail square size={80} source={{uri:image}} />

				) : null}

				<Body>
					<Text>{no._get('title')}</Text>
					<Text noted>Read : {no._get('count')}</Text>
				</Body>



			</ListItem>
		);
	}
};

export default Component;