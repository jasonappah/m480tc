import { Input, Output, Sysex } from "easymidi";
import EventEmitter = require("events");

export default class M480 {
	outputReady: boolean;
	inputReady: boolean;
	_input?: Input;
	_output?: Output;

	constructor() {
		this.outputReady = false;
		this.inputReady = false;
	}


	channel(channel: number): Channel | null {
		if (!this.ready) {
			return null;
		}

		if (channel < 1 || channel > 48) {
			return null;
		}

		// return {};
        return null;
	}

	async connect(
		input: string,
		output: string,
		verify: boolean = true,
		timeoutMs: number = 10000
	) {
		if (!this.inputReady) {
			this._input = new Input(input);
			this.inputReady = true;
		}
		if (!this.outputReady) {
			this._output = new Output(output);
			this.outputReady = true;
		}
		if (verify) {
			await this.verify(timeoutMs);
		}
        // TODO: create private event listeners for changes
	}

	async verify(timeoutMs: number = 10000) {
		if (!this.ready) {
			return false;
		}
        // TODO: Add expected response
		const expected = [];
        // TODO: Figure out how to implement this ha
		this._input?.once("sysex", (msg: Sysex) => {});
		this._output?.send("sysex", []);
	}

	get ready() {
		return this.inputReady && this.outputReady;
	}

	disconnect() {
		this._input?.close();
		this._output?.close();
		this.inputReady = false;
		this.outputReady = false;
	}
}

class Channel {
	// TODO: implement
}
