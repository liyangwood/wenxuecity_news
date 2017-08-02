import React from 'react';
import {View, Text} from 'react-native';
import {Container, Tabs, Tab, Root} from 'native-base';
import { Provider } from 'react-redux';
import data from 'app/data';
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation';
import router from './router';
import {goPath} from 'lib';


import './boot';


const CardStackNavigator = StackNavigator(router, {
	headerMode : 'none',

});


const App = class extends React.Component{
	constructor(p){
		super(p);

		this.state = {
			page : CardStackNavigator.router.getStateForAction(CardStackNavigator.router.getActionForPathAndParams('main'))
		};

		goPath(this.goPath.bind(this));
	}
	render(){
		return (
			<Provider store={data.store}>
				<Root>
					<CardStackNavigator
						navigation={addNavigationHelpers({
							state : this.state.page,
							goPath : (p)=>{this.goPath(p);},
							dispatch : (p)=>{this.goPath(p);}
						})}
					/>
				</Root>
			</Provider>
		);
	}

	goPath(name, type='navigate', opts={}){
		let rs = null;
		if(_.isString(name)){
			let config = {};
			if(type === 'back'){
				config = {routeName : name};
			}
			else if(type === 'reset'){
				config = {
					index : opts.index || 0,
					actions : opts.actions || [NavigationActions.navigate({ routeName: name})]
				};
			}
			else{
				config = {
					routeName : name,
					params : opts.params || {},
					action : opts.action || null
				};
			}

			rs = CardStackNavigator.router.getStateForAction(NavigationActions[type](config), this.state.page);
		}
		else if(_.isObject(name)){
			rs = CardStackNavigator.router.getStateForAction(name, this.state.page);
		}
		else{
			throw new Error(`${name} is not valid`);
		}

		const statusBar = router[name] ? router[name].statusBar : null;
		if(statusBar){
			if(statusBar.show){
				StatusBar.setHidden(false);
			}
			else{
				StatusBar.setHidden(true);
			}
		}


		this.setState({page : rs});
	}
};

export default App;