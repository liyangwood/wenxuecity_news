import React from 'react';
import {View, Text} from 'react-native';
import {Container, Tabs, Tab} from 'native-base';
import { Provider } from 'react-redux';
import data from 'app/data';

import './boot';

import NewsListContainer from 'app/module/news/newsListContainer';


const App = class extends React.Component{

	render(){
		return (
			<Provider store={data.store}>
				<Container>
					<Tabs initialPage={1} tabBarPosition="bottom">
						<Tab heading="Tab1">
							<NewsListContainer />
						</Tab>
						<Tab heading="Tab2">


						</Tab>
					</Tabs>
				</Container>
			</Provider>
		);
	}
};

export default App;