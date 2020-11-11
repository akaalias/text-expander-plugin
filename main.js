'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var ExpanderSettingTab = /** @class */ (function (_super) {
    __extends(ExpanderSettingTab, _super);
    function ExpanderSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    ExpanderSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Expander Plugin - Custom Keywords" });
        containerEl.createEl("p", {
            text: "To start your expanders, type :: (colon-character twice) and then your keyword. Press [Enter], [Tab] or [Space] to fire the expansion. Built-in keywords are `date` (::date) and `time` (::time) which will expand to the current date and time respectively.",
        });
        new obsidian.Setting(containerEl)
            .setName("Trigger #1 Keyword")
            .setDesc("")
            .addText(function (text) {
            return text
                .setPlaceholder("foo (no colons needed)")
                .setValue(_this.plugin.settings.triggerOneKeyword)
                .onChange(function (value) {
                _this.plugin.settings.triggerOneKeyword = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Trigger #1 Replacement")
            .setDesc("What keyword #1 should expand to")
            .addTextArea(function (text) {
            return text
                .setPlaceholder("")
                .setValue(_this.plugin.settings.triggerOneValue)
                .onChange(function (value) {
                _this.plugin.settings.triggerOneValue = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        // custom trigger #2
        new obsidian.Setting(containerEl)
            .setName("Trigger #2 Keyword")
            .setDesc("")
            .addText(function (text) {
            return text
                .setPlaceholder("bar (no colons needed)")
                .setValue(_this.plugin.settings.triggerTwoKeyword)
                .onChange(function (value) {
                _this.plugin.settings.triggerTwoKeyword = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Trigger #2 Replacement")
            .setDesc("What keyword #2 should expand to")
            .addTextArea(function (text) {
            return text
                .setPlaceholder("")
                .setValue(_this.plugin.settings.triggerTwoValue)
                .onChange(function (value) {
                _this.plugin.settings.triggerTwoValue = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        // custom trigger #3
        new obsidian.Setting(containerEl)
            .setName("Trigger #3 Keyword")
            .setDesc("")
            .addText(function (text) {
            return text
                .setPlaceholder("baz (no colons needed)")
                .setValue(_this.plugin.settings.triggerThreeKeyword)
                .onChange(function (value) {
                _this.plugin.settings.triggerThreeKeyword = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Trigger #3 Replacement")
            .setDesc("What keyword #3 should expand to")
            .addTextArea(function (text) {
            return text
                .setPlaceholder("")
                .setValue(_this.plugin.settings.triggerThreeValue)
                .onChange(function (value) {
                _this.plugin.settings.triggerThreeValue = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
    };
    return ExpanderSettingTab;
}(obsidian.PluginSettingTab));

var ExpanderPluginSettings = /** @class */ (function () {
    function ExpanderPluginSettings() {
        this.triggerOneValue = "";
        this.triggerOneKeyword = "";
        this.triggerTwoKeyword = "";
        this.triggerTwoValue = "";
        this.triggerThreeKeyword = "";
        this.triggerThreeValue = "";
    }
    return ExpanderPluginSettings;
}());

var ExpanderPlugin = /** @class */ (function (_super) {
    __extends(ExpanderPlugin, _super);
    function ExpanderPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKeyDown = function (cm, event) {
            if (!_this.listening) {
                if (event.key == ":") {
                    // see if this is the second :
                    var cursor = cm.getCursor();
                    var previousPosition = {
                        ch: cursor.ch - 1,
                        line: cursor.line,
                        sticky: "yes",
                    };
                    var range = cm.getRange(previousPosition, cursor);
                    if ([":"].contains(range.charAt(0))) {
                        _this.listening = true;
                        _this.statusBar.setText("I'm listening...");
                    }
                }
            }
            else if (event.key == "Enter" || event.key == "Tab" || event.key == " ") {
                var cursor = cm.getCursor();
                var line_1 = cursor.line;
                var lineString_1 = cm.getLine(line_1);
                var patterns = new Map();
                // default triggers
                var d = new Date();
                patterns.set("::date", d.toDateString());
                patterns.set("::time", d.toLocaleTimeString());
                // custom triggers
                if (_this.settings.triggerOneKeyword) {
                    patterns.set("::" + _this.settings.triggerOneKeyword, _this.settings.triggerOneValue);
                }
                if (_this.settings.triggerTwoKeyword) {
                    patterns.set("::" + _this.settings.triggerTwoKeyword, _this.settings.triggerTwoValue);
                }
                if (_this.settings.triggerThreeKeyword) {
                    patterns.set("::" + _this.settings.triggerThreeKeyword, _this.settings.triggerThreeValue);
                }
                patterns.forEach(function (value, key) {
                    var pattern = key;
                    var regex = RegExp(pattern);
                    if (regex.test(lineString_1)) {
                        var patternMatchIndex = lineString_1.match(pattern).index;
                        var patternLength = pattern.length;
                        cm.replaceRange(value, { ch: patternMatchIndex, line: line_1 }, { ch: patternMatchIndex + patternLength, line: line_1 });
                    }
                });
                _this.listening = false;
                _this.statusBar.setText("");
            }
            else if (event.key == "Escape") {
                _this.listening = false;
                _this.statusBar.setText("");
            }
        };
        return _this;
    }
    ExpanderPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadSettings();
                this.addSettingTab(new ExpanderSettingTab(this.app, this));
                this.statusBar = this.addStatusBarItem();
                this.cmEditors = [];
                this.registerEvent(this.app.on("codemirror", function (cm) {
                    _this.cmEditors.push(cm);
                    cm.on("keydown", _this.handleKeyDown);
                }));
                return [2 /*return*/];
            });
        });
    };
    ExpanderPlugin.prototype.onunload = function () {
        var _this = this;
        console.log("unloading plugin");
        this.cmEditors.forEach(function (cm) {
            cm.off("keydown", _this.handleKeyDown);
        });
    };
    ExpanderPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.settings = new ExpanderPluginSettings();
                (function () { return __awaiter(_this, void 0, void 0, function () {
                    var loadedSettings;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadData()];
                            case 1:
                                loadedSettings = _a.sent();
                                if (loadedSettings) {
                                    console.log("Found existing settings file");
                                    this.settings.triggerOneKeyword = loadedSettings.triggerOneKeyword;
                                    this.settings.triggerOneValue = loadedSettings.triggerOneValue;
                                    this.settings.triggerTwoKeyword = loadedSettings.triggerTwoKeyword;
                                    this.settings.triggerTwoValue = loadedSettings.triggerTwoValue;
                                    this.settings.triggerThreeKeyword = loadedSettings.triggerThreeKeyword;
                                    this.settings.triggerThreeValue = loadedSettings.triggerThreeValue;
                                }
                                else {
                                    console.log("No settings file found, saving...");
                                    this.saveData(this.settings);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); })();
                return [2 /*return*/];
            });
        });
    };
    return ExpanderPlugin;
}(obsidian.Plugin));

module.exports = ExpanderPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9leHBhbmRlci1zZXR0aW5nLXRhYi50cyIsInNyYy9leHBhbmRlci1wbHVnaW4tc2V0dGluZ3MudHMiLCJzcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCBFeHBhbmRlclBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGFuZGVyU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwcml2YXRlIHJlYWRvbmx5IHBsdWdpbjogRXhwYW5kZXJQbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogRXhwYW5kZXJQbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG5cbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoMlwiLCB7IHRleHQ6IFwiRXhwYW5kZXIgUGx1Z2luIC0gQ3VzdG9tIEtleXdvcmRzXCIgfSk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJwXCIsIHtcbiAgICAgIHRleHQ6XG4gICAgICAgIFwiVG8gc3RhcnQgeW91ciBleHBhbmRlcnMsIHR5cGUgOjogKGNvbG9uLWNoYXJhY3RlciB0d2ljZSkgYW5kIHRoZW4geW91ciBrZXl3b3JkLiBQcmVzcyBbRW50ZXJdLCBbVGFiXSBvciBbU3BhY2VdIHRvIGZpcmUgdGhlIGV4cGFuc2lvbi4gQnVpbHQtaW4ga2V5d29yZHMgYXJlIGBkYXRlYCAoOjpkYXRlKSBhbmQgYHRpbWVgICg6OnRpbWUpIHdoaWNoIHdpbGwgZXhwYW5kIHRvIHRoZSBjdXJyZW50IGRhdGUgYW5kIHRpbWUgcmVzcGVjdGl2ZWx5LlwiLFxuICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlRyaWdnZXIgIzEgS2V5d29yZFwiKVxuICAgICAgLnNldERlc2MoXCJcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiZm9vIChubyBjb2xvbnMgbmVlZGVkKVwiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50cmlnZ2VyT25lS2V5d29yZClcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50cmlnZ2VyT25lS2V5d29yZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlRyaWdnZXIgIzEgUmVwbGFjZW1lbnRcIilcbiAgICAgIC5zZXREZXNjKFwiV2hhdCBrZXl3b3JkICMxIHNob3VsZCBleHBhbmQgdG9cIilcbiAgICAgIC5hZGRUZXh0QXJlYSgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIlwiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50cmlnZ2VyT25lVmFsdWUpXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudHJpZ2dlck9uZVZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBjdXN0b20gdHJpZ2dlciAjMlxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJUcmlnZ2VyICMyIEtleXdvcmRcIilcbiAgICAgIC5zZXREZXNjKFwiXCIpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcImJhciAobm8gY29sb25zIG5lZWRlZClcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudHJpZ2dlclR3b0tleXdvcmQpXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudHJpZ2dlclR3b0tleXdvcmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJUcmlnZ2VyICMyIFJlcGxhY2VtZW50XCIpXG4gICAgICAuc2V0RGVzYyhcIldoYXQga2V5d29yZCAjMiBzaG91bGQgZXhwYW5kIHRvXCIpXG4gICAgICAuYWRkVGV4dEFyZWEoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudHJpZ2dlclR3b1ZhbHVlKVxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRyaWdnZXJUd29WYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gY3VzdG9tIHRyaWdnZXIgIzNcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiVHJpZ2dlciAjMyBLZXl3b3JkXCIpXG4gICAgICAuc2V0RGVzYyhcIlwiKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJiYXogKG5vIGNvbG9ucyBuZWVkZWQpXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnRyaWdnZXJUaHJlZUtleXdvcmQpXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudHJpZ2dlclRocmVlS2V5d29yZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlRyaWdnZXIgIzMgUmVwbGFjZW1lbnRcIilcbiAgICAgIC5zZXREZXNjKFwiV2hhdCBrZXl3b3JkICMzIHNob3VsZCBleHBhbmQgdG9cIilcbiAgICAgIC5hZGRUZXh0QXJlYSgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIlwiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50cmlnZ2VyVGhyZWVWYWx1ZSlcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50cmlnZ2VyVGhyZWVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBhbmRlclBsdWdpblNldHRpbmdzIHtcbiAgcHVibGljIHRyaWdnZXJPbmVWYWx1ZTogc3RyaW5nO1xuXG4gIHB1YmxpYyB0cmlnZ2VyT25lS2V5d29yZDogc3RyaW5nO1xuXG4gIHB1YmxpYyB0cmlnZ2VyVHdvS2V5d29yZDogc3RyaW5nO1xuXG4gIHB1YmxpYyB0cmlnZ2VyVHdvVmFsdWU6IHN0cmluZztcblxuICBwdWJsaWMgdHJpZ2dlclRocmVlS2V5d29yZDogc3RyaW5nO1xuXG4gIHB1YmxpYyB0cmlnZ2VyVGhyZWVWYWx1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHJpZ2dlck9uZVZhbHVlID0gXCJcIjtcbiAgICB0aGlzLnRyaWdnZXJPbmVLZXl3b3JkID0gXCJcIjtcbiAgICB0aGlzLnRyaWdnZXJUd29LZXl3b3JkID0gXCJcIjtcbiAgICB0aGlzLnRyaWdnZXJUd29WYWx1ZSA9IFwiXCI7XG4gICAgdGhpcy50cmlnZ2VyVGhyZWVLZXl3b3JkID0gXCJcIjtcbiAgICB0aGlzLnRyaWdnZXJUaHJlZVZhbHVlID0gXCJcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgRXhwYW5kZXJTZXR0aW5nVGFiIGZyb20gXCIuL2V4cGFuZGVyLXNldHRpbmctdGFiXCI7XG5pbXBvcnQgRXhwYW5kZXJQbHVnaW5TZXR0aW5ncyBmcm9tIFwiLi9leHBhbmRlci1wbHVnaW4tc2V0dGluZ3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwYW5kZXJQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBwdWJsaWMgc2V0dGluZ3M6IEV4cGFuZGVyUGx1Z2luU2V0dGluZ3M7XG5cbiAgcHJpdmF0ZSBjbUVkaXRvcnM6IENvZGVNaXJyb3IuRWRpdG9yW107XG5cbiAgcHJpdmF0ZSBzdGF0dXNCYXI6IEhUTUxFbGVtZW50O1xuXG4gIHByaXZhdGUgbGlzdGVuaW5nOiBib29sZWFuO1xuXG4gIHB1YmxpYyBhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5sb2FkU2V0dGluZ3MoKTtcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IEV4cGFuZGVyU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgdGhpcy5zdGF0dXNCYXIgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcblxuICAgIHRoaXMuY21FZGl0b3JzID0gW107XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAub24oXCJjb2RlbWlycm9yXCIsIChjbTogQ29kZU1pcnJvci5FZGl0b3IpID0+IHtcbiAgICAgICAgdGhpcy5jbUVkaXRvcnMucHVzaChjbSk7XG4gICAgICAgIGNtLm9uKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9udW5sb2FkKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwidW5sb2FkaW5nIHBsdWdpblwiKTtcblxuICAgIHRoaXMuY21FZGl0b3JzLmZvckVhY2goKGNtKSA9PiB7XG4gICAgICBjbS5vZmYoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRTZXR0aW5ncygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IEV4cGFuZGVyUGx1Z2luU2V0dGluZ3MoKTtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVkU2V0dGluZ3MgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgICBpZiAobG9hZGVkU2V0dGluZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBleGlzdGluZyBzZXR0aW5ncyBmaWxlXCIpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRyaWdnZXJPbmVLZXl3b3JkID0gbG9hZGVkU2V0dGluZ3MudHJpZ2dlck9uZUtleXdvcmQ7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudHJpZ2dlck9uZVZhbHVlID0gbG9hZGVkU2V0dGluZ3MudHJpZ2dlck9uZVZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MudHJpZ2dlclR3b0tleXdvcmQgPSBsb2FkZWRTZXR0aW5ncy50cmlnZ2VyVHdvS2V5d29yZDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50cmlnZ2VyVHdvVmFsdWUgPSBsb2FkZWRTZXR0aW5ncy50cmlnZ2VyVHdvVmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy50cmlnZ2VyVGhyZWVLZXl3b3JkID0gbG9hZGVkU2V0dGluZ3MudHJpZ2dlclRocmVlS2V5d29yZDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50cmlnZ2VyVGhyZWVWYWx1ZSA9IGxvYWRlZFNldHRpbmdzLnRyaWdnZXJUaHJlZVZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBzZXR0aW5ncyBmaWxlIGZvdW5kLCBzYXZpbmcuLi5cIik7XG4gICAgICAgIHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlS2V5RG93biA9IChcbiAgICBjbTogQ29kZU1pcnJvci5FZGl0b3IsXG4gICAgZXZlbnQ6IEtleWJvYXJkRXZlbnRcbiAgKTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PSBcIjpcIikge1xuICAgICAgICAvLyBzZWUgaWYgdGhpcyBpcyB0aGUgc2Vjb25kIDpcbiAgICAgICAgY29uc3QgY3Vyc29yID0gY20uZ2V0Q3Vyc29yKCk7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUG9zaXRpb24gPSB7XG4gICAgICAgICAgY2g6IGN1cnNvci5jaCAtIDEsXG4gICAgICAgICAgbGluZTogY3Vyc29yLmxpbmUsXG4gICAgICAgICAgc3RpY2t5OiBcInllc1wiLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByYW5nZSA9IGNtLmdldFJhbmdlKHByZXZpb3VzUG9zaXRpb24sIGN1cnNvcik7XG5cbiAgICAgICAgaWYgKFtcIjpcIl0uY29udGFpbnMocmFuZ2UuY2hhckF0KDApKSkge1xuICAgICAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRUZXh0KFwiSSdtIGxpc3RlbmluZy4uLlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIiB8fCBldmVudC5rZXkgPT0gXCJUYWJcIiB8fCBldmVudC5rZXkgPT0gXCIgXCIpIHtcbiAgICAgIGNvbnN0IGN1cnNvciA9IGNtLmdldEN1cnNvcigpO1xuICAgICAgY29uc3QgeyBsaW5lIH0gPSBjdXJzb3I7XG4gICAgICBjb25zdCBsaW5lU3RyaW5nID0gY20uZ2V0TGluZShsaW5lKTtcblxuICAgICAgY29uc3QgcGF0dGVybnMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gICAgICAvLyBkZWZhdWx0IHRyaWdnZXJzXG4gICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICAgIHBhdHRlcm5zLnNldChcIjo6ZGF0ZVwiLCBkLnRvRGF0ZVN0cmluZygpKTtcbiAgICAgIHBhdHRlcm5zLnNldChcIjo6dGltZVwiLCBkLnRvTG9jYWxlVGltZVN0cmluZygpKTtcblxuICAgICAgLy8gY3VzdG9tIHRyaWdnZXJzXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy50cmlnZ2VyT25lS2V5d29yZCkge1xuICAgICAgICBwYXR0ZXJucy5zZXQoXG4gICAgICAgICAgYDo6JHt0aGlzLnNldHRpbmdzLnRyaWdnZXJPbmVLZXl3b3JkfWAsXG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy50cmlnZ2VyT25lVmFsdWVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudHJpZ2dlclR3b0tleXdvcmQpIHtcbiAgICAgICAgcGF0dGVybnMuc2V0KFxuICAgICAgICAgIGA6OiR7dGhpcy5zZXR0aW5ncy50cmlnZ2VyVHdvS2V5d29yZH1gLFxuICAgICAgICAgIHRoaXMuc2V0dGluZ3MudHJpZ2dlclR3b1ZhbHVlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLnRyaWdnZXJUaHJlZUtleXdvcmQpIHtcbiAgICAgICAgcGF0dGVybnMuc2V0KFxuICAgICAgICAgIGA6OiR7dGhpcy5zZXR0aW5ncy50cmlnZ2VyVGhyZWVLZXl3b3JkfWAsXG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy50cmlnZ2VyVGhyZWVWYWx1ZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBwYXR0ZXJucy5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0ga2V5O1xuICAgICAgICBjb25zdCByZWdleCA9IFJlZ0V4cChwYXR0ZXJuKTtcblxuICAgICAgICBpZiAocmVnZXgudGVzdChsaW5lU3RyaW5nKSkge1xuICAgICAgICAgIGNvbnN0IHBhdHRlcm5NYXRjaEluZGV4ID0gbGluZVN0cmluZy5tYXRjaChwYXR0ZXJuKS5pbmRleDtcbiAgICAgICAgICBjb25zdCBwYXR0ZXJuTGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XG5cbiAgICAgICAgICBjbS5yZXBsYWNlUmFuZ2UoXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHsgY2g6IHBhdHRlcm5NYXRjaEluZGV4LCBsaW5lIH0sXG4gICAgICAgICAgICB7IGNoOiBwYXR0ZXJuTWF0Y2hJbmRleCArIHBhdHRlcm5MZW5ndGgsIGxpbmUgfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0dXNCYXIuc2V0VGV4dChcIlwiKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0dXNCYXIuc2V0VGV4dChcIlwiKTtcbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxD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
