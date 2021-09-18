import EventEmitter from 'eventemitter3';
import Beat from './Beat';

export default class Application extends EventEmitter {
	static get events() {
		return {
			READY: 'ready',
		};
	}

	constructor() {
		super();

		const lyrics = ['Ah', 'ha', 'ha', 'ha', "stayin' alive", "stayin' alive"];
		let count = 0;

		const message = document.createElement('div');
		message.classList.add('message');
		message.innerText = 'Ah';

		document.querySelector('.main').appendChild(message);

		const _beat = new Beat();

		this.addListener(Beat.events.BIT, function () {
			console.log('the event is emited');
		});

		this.emit(Application.events.READY);
	}

	_create() {}
}
