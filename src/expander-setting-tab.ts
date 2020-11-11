import { App, PluginSettingTab, Setting } from "obsidian";
import ExpanderPlugin from "./main";

export default class ExpanderSettingTab extends PluginSettingTab {
  private readonly plugin: ExpanderPlugin;

  constructor(app: App, plugin: ExpanderPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    containerEl.createEl("h2", { text: "Expander Plugin - Custom Keywords" });
    containerEl.createEl("p", {
      text:
        "To start your expanders, type :: (colon-character twice) and then your keyword. Press [Enter], [Tab] or [Space] to fire the expansion. Built-in keywords are `date` (::date) and `time` (::time) which will expand to the current date and time respectively.",
    });

    new Setting(containerEl)
      .setName("Trigger #1 Keyword")
      .setDesc("")
      .addText((text) =>
        text
          .setPlaceholder("foo (no colons needed)")
          .setValue(this.plugin.settings.triggerOneKeyword)
          .onChange((value) => {
            this.plugin.settings.triggerOneKeyword = value;
            this.plugin.saveData(this.plugin.settings);
          })
      );

    new Setting(containerEl)
      .setName("Trigger #1 Replacement")
      .setDesc("What keyword #1 should expand to")
      .addTextArea((text) =>
        text
          .setPlaceholder("")
          .setValue(this.plugin.settings.triggerOneValue)
          .onChange((value) => {
            this.plugin.settings.triggerOneValue = value;
            this.plugin.saveData(this.plugin.settings);
          })
      );

    // custom trigger #2
    new Setting(containerEl)
      .setName("Trigger #2 Keyword")
      .setDesc("")
      .addText((text) =>
        text
          .setPlaceholder("bar (no colons needed)")
          .setValue(this.plugin.settings.triggerTwoKeyword)
          .onChange((value) => {
            this.plugin.settings.triggerTwoKeyword = value;
            this.plugin.saveData(this.plugin.settings);
          })
      );

    new Setting(containerEl)
      .setName("Trigger #2 Replacement")
      .setDesc("What keyword #2 should expand to")
      .addTextArea((text) =>
        text
          .setPlaceholder("")
          .setValue(this.plugin.settings.triggerTwoValue)
          .onChange((value) => {
            this.plugin.settings.triggerTwoValue = value;
            this.plugin.saveData(this.plugin.settings);
          })
      );

    // custom trigger #3
    new Setting(containerEl)
      .setName("Trigger #3 Keyword")
      .setDesc("")
      .addText((text) =>
        text
          .setPlaceholder("baz (no colons needed)")
          .setValue(this.plugin.settings.triggerThreeKeyword)
          .onChange((value) => {
            this.plugin.settings.triggerThreeKeyword = value;
            this.plugin.saveData(this.plugin.settings);
          })
      );

    new Setting(containerEl)
      .setName("Trigger #3 Replacement")
      .setDesc("What keyword #3 should expand to")
      .addTextArea((text) =>
        text
          .setPlaceholder("")
          .setValue(this.plugin.settings.triggerThreeValue)
          .onChange((value) => {
            this.plugin.settings.triggerThreeValue = value;
            this.plugin.saveData(this.plugin.settings);
          })
      );
  }
}
