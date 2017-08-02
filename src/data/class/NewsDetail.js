import Base from './Base';

export default class extends Base{
	format(type, param=false){
		switch(type){
			case 'content':
				return this._getContent();
		}

		return super.format(type, param);
	}

	_getContent(){
		const {content} = this.variables;

		return content;
	}

	buildHtml(){
		const {content} = this.variables;

		const style = `
			<style>
				img{width:100%;}
				p{font-size:14px;}
			</style>
		`;

		return `
			<html><body>${style}\n${content}</body></html>
		`;

	}


}