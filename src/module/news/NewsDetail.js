import React from 'react';
import {Container, Header, Button, Text, Title, Left, Body, Icon, Right, Spinner, Content} from 'native-base';
import {I18N} from 'kg';
import {NewsDetail} from 'app/data/class';
import {WebView} from 'react-native';


export default class extends React.Component{
	constructor(p){
		super(p);

	}
	render(){
		const {data} = this.props;
		if(!data){
			return (
				<Container>
					{this.renderHeader()}
					<Spinner color="green" />
				</Container>
			);
		}

		const d = new NewsDetail(data);
		return (
			<Container>
				{this.renderHeader()}
				{this.renderBody(d)}

			</Container>
		);
	}

	renderBody(d){
		const html = d.buildHtml();
		console.log(html);

		return (
			<WebView source={{html:html}} />
		);
	}

	renderHeader(){
		return (
			<Header>
				<Left>
					<Button onPress={this.props.goBack} transparent>
						<Icon name='arrow-back' />
					</Button>
				</Left>

				<Body>
					<Title>{I18N.get('0001')}</Title>
				</Body>

				<Right></Right>
			</Header>
		);
	}
};