import { App, Modal, Notice, Plugin, MetadataCache } from 'obsidian';

export default class MyPlugin extends Plugin {

  	private cmEditors: CodeMirror.Editor[];
	private statusBar: HTMLElement;
	private listening: boolean;
	private patterns: Map<string, string>;

	onload() {

		this.patterns = new Map<string, string>();

		this.patterns.set("::foo", "REPLACEMENT");
		this.patterns.set("::date", "");

		this.statusBar = this.addStatusBarItem()

		this.cmEditors = [];
		this.registerEvent(
		  this.app.on('codemirror', (cm: CodeMirror.Editor) => {
			this.cmEditors.push(cm);
			cm.on('keydown', this.handleKeyDown);
		  }),
		);		
	}

	onunload() {
		console.log('unloading plugin');

		this.cmEditors.forEach((cm) => {
			cm.off('keydown', this.handleKeyDown);
		  });
	}

	private readonly handleKeyDown = (
		cm: CodeMirror.Editor,
		event: KeyboardEvent,
	  ): void => {

		if(!this.listening) {
			if (event.key == ':') {					
				//see if this is the second :
				let cursor = cm.getCursor();
				let line = cursor.line;
				let lineString = cm.getLine(line);
				let previousPosition = {ch: cursor.ch - 1, line: cursor.line, sticky: 'yes'}
				let range = cm.getRange(previousPosition, cursor);

				console.log(range.charAt(0));

				if([':'].contains(range.charAt(0))) { 
					this.listening = true
					this.statusBar.setText("I'm listening...");
				}
			}
		} else if (event.key == 'Enter') {

			let cursor = cm.getCursor();
			let line = cursor.line;
			let lineString = cm.getLine(line);

			this.patterns.forEach((value: string, key: string) => {

				// handle dynamic values
				if(key == "::date") {
					value = new Date().toDateString();
				}

				const pattern = key;
				const regex = RegExp(pattern);
	
				if(regex.test(lineString)) {
	
					let patternMatchIndex = lineString.match(pattern).index
					let patternLength = pattern.length
					
					cm.replaceRange(value, {ch: patternMatchIndex, line: line}, {ch: patternMatchIndex + patternLength, line: line});
				}			
		});

		this.listening = false
		this.statusBar.setText("");		
	  }
	}
}