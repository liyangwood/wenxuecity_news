import React from 'react';
import {Container, Tabs, Tab, Icon, TabHeading} from 'native-base';
import NewsListContainer from 'app/module/news/NewsListContainer';
import {createContainer} from "lib";
import {color} from 'lib/style';
import {_} from 'kg';

const style = {
	icon : {
		color : color.green
	},
	tab_active : {

	}
};
const C = class extends React.Component{
	getTabList(){
		return [
			{
				head :  (
					<TabHeading>
						<Icon name="home" style={style.icon} />
					</TabHeading>
				),
				child : <NewsListContainer />
			},
			{
				head : (
					<TabHeading>
						<Icon name="ei-camera" style={style.icon} />
					</TabHeading>
				)
			}
		];
	}
	render(){

		return (
			<Container>
				<Tabs initialPage={0} tabBarPosition="bottom" tabBarUnderlineStyle={{backgroundColor:color.green}}>
					{
						_.map(this.getTabList(), (item, i)=>{
							return (
								<Tab key={i} heading={item.head} activeTabStyle={style.tab_active}>
									{item.child}
								</Tab>
							);
						})
					}
				</Tabs>
			</Container>
		);
	}
}

export default createContainer(C, ()=>{
	return {};
});