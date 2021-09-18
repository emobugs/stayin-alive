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

		const _beat = new Beat();

		_beat.on(Beat.events.BIT, () => {
			this._create(lyrics[count]);
			console.log(lyrics[count]);
			count = Math.abs(++count % lyrics.length);
		});

		this.emit(Application.events.READY);
	}

	_create(text) {
		const message = document.createElement('div');
		message.classList.add('message');
		message.innerText = text;
		document.querySelector('.main').appendChild(message);
	}
}
