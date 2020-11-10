import { Plugin } from 'obsidian';
import ExpanderSettingTab from './expander-setting-tab';
import ExpanderPluginSettings from './expander-plugin-settings';

export default class ExpanderPlugin extends Plugin {
  public settings: ExpanderPluginSettings;

  private cmEditors: CodeMirror.Editor[];

  private statusBar: HTMLElement;

  private listening: boolean;

  public async onload(): Promise<void> {
    this.loadSettings();
    this.addSettingTab(new ExpanderSettingTab(this.app, this));

    this.statusBar = this.addStatusBarItem();

    this.cmEditors = [];
    this.registerEvent(
      this.app.on('codemirror', (cm: CodeMirror.Editor) => {
        this.cmEditors.push(cm);
        cm.on('keydown', this.handleKeyDown);
      }),
    );
  }

  public onunload(): void {
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

        this.settings.triggerTwoKeyword = loadedSettings.triggerTwoKeyword;
        this.settings.triggerTwoValue = loadedSettings.triggerTwoValue;
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
    if (!this.listening) {
      if (event.key == ':') {
        // see if this is the second :
        const cursor = cm.getCursor();
        const previousPosition = {
          ch: cursor.ch - 1,
          line: cursor.line,
          sticky: 'yes',
        };
        const range = cm.getRange(previousPosition, cursor);

        if ([':'].contains(range.charAt(0))) {
          this.listening = true;
          this.statusBar.setText("I'm listening...");
        }
      }
    } else if (event.key == 'Enter' || event.key == 'Tab' || event.key == ' ') {
      const cursor = cm.getCursor();
      const { line } = cursor;
      const lineString = cm.getLine(line);

      const patterns = new Map<string, string>();

      // default triggers
      patterns.set('::date', new Date().toDateString());

      // custom triggers
      if (this.settings.triggerOneKeyword) {
        patterns.set(
          `::${this.settings.triggerOneKeyword}`,
          this.settings.triggerOneValue,
        );
      }

      if (this.settings.triggerTwoKeyword) {
        patterns.set(
          `::${this.settings.triggerTwoKeyword}`,
          this.settings.triggerTwoValue,
        );
      }
      if (this.settings.triggerThreeKeyword) {
        patterns.set(
          `::${this.settings.triggerThreeKeyword}`,
          this.settings.triggerThreeValue,
        );
      }

      patterns.forEach((value: string, key: string) => {
        const pattern = key;
        const regex = RegExp(pattern);

        if (regex.test(lineString)) {
          const patternMatchIndex = lineString.match(pattern).index;
          const patternLength = pattern.length;

          cm.replaceRange(
            value,
            { ch: patternMatchIndex, line },
            { ch: patternMatchIndex + patternLength, line },
          );
        }
      });

      this.listening = false;
      this.statusBar.setText('');
    } else if (event.key == 'Escape') {
      this.listening = false;
      this.statusBar.setText('');
    }
  };
}
