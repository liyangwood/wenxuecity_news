import React from 'react';
import {Container, Text} from 'native-base';

export default class extends React.Component{
	render(){
		return (
			<Container>
				<Text>{this.props.newsID}</Text>
			</Container>
		);
	}
};