export class Component {

	constructor(config) {
		this.template = config.template;
		this.selector = config.selector;
		this.el = null;
	}

	render() {
		this.el = document.querySelector(this.selector);
		if(!this.el) {
			throw newError(`component with selector is not found`);
		}
		this.el.innerHTML = this.template;
	}

}