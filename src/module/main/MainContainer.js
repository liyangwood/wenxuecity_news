import React from 'react';
import {Container, Tabs, Tab} from 'native-base';
import NewsListContainer from 'app/module/news/NewsListContainer';
import {createContainer} from "lib";

const C = class extends React.Component{
	render(){
		return (
			<Container>
				<Tabs initialPage={0} tabBarPosition="bottom">
					<Tab heading="Tab1">
						<NewsListContainer />
					</Tab>
					<Tab heading="Tab2">


					</Tab>
				</Tabs>
			</Container>
		);
	}
}

export default createContainer(C, ()=>{
	return {};
});