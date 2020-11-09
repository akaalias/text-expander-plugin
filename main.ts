import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class ExpanderPlugin extends Plugin {
	
	public settings: ExpanderPluginSettings;

  	private cmEditors: CodeMirror.Editor[];
	private statusBar: HTMLElement;
	private listening: boolean;
	private patterns: Map<string, string>;

	onload() {

		this.loadSettings();
		this.addSettingTab(new ExpanderSettingTab(this.app, this));

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

	private async loadSettings(): Promise<void> {
		this.settings = new ExpanderPluginSettings();
		(async () => {
		  const loadedSettings = await this.loadData();
		  if (loadedSettings) {
			console.log('Found existing settings file');
			this.settings.triggerOneKeyword = loadedSettings.triggerOneKeyword;
			this.settings.triggerOneValue = loadedSettings.triggerOneValue;
		  } else {
			console.log('No settings file found, saving...');
			this.saveData(this.settings);
		  }
		})();
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

			let patterns = new Map<string, string>();

			// default triggers
			patterns.set("::date", new Date().toDateString());
	
			//custom triggers
			console.log("adding custom keywords");
	
			if(this.settings.triggerOneKeyword) {
				patterns.set("::" + this.settings.triggerOneKeyword, this.settings.triggerOneValue);
			}

			if(this.settings.triggerTwoKeyword) {
				patterns.set("::" + this.settings.triggerTwoKeyword, this.settings.triggerTwoValue);
			}

			patterns.forEach((value: string, key: string) => {
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

class ExpanderPluginSettings {
	public triggerOneKeyword: string;
	public triggerOneValue: string;
	public triggerTwoKeyword: string;
	public triggerTwoValue: string;
}

class ExpanderSettingTab extends PluginSettingTab {

	private readonly plugin: ExpanderPlugin;

	constructor(app: App, plugin: ExpanderPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	  }

	  display(): void {
		let {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', { text: 'Expander Plugin - Custom Keywords' });
		
		new Setting(containerEl)
			.setName('Trigger #1 Keyword')
			.setDesc('foo -> ::foo')
			.addText(text => text.setPlaceholder('foo')
				.setValue(this.plugin.settings.triggerOneKeyword)
				.onChange((value) => {
					this.plugin.settings.triggerOneKeyword = value
				  	this.plugin.saveData(this.plugin.settings);
		}));

		new Setting(containerEl)
		.setName('Trigger #1 Replacement')
		.setDesc('What trigger keyword #1 should expand to')
		.addTextArea(text => text.setPlaceholder('')
			.setValue(this.plugin.settings.triggerOneValue)
			.onChange((value) => {
				this.plugin.settings.triggerOneValue = value
				this.plugin.saveData(this.plugin.settings);
		}));
	}
}

