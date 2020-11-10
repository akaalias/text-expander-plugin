## Text-expander

A bare-bones proof-of-concept implementation of a simple text-expander in Obsidian.

1. Uses `::` to start the trigger-sequence
2. Define your own custom trigger keyword like `foo`
3. In the editor, type `::foo` and hit ENTER to expand

Built-in is `::date` which will expand to todays date such as `Mon Nov 09 2020` and `::time` which will expand to your current timezone's time.

## Demo

![Demo](https://github.com/akaalias/obsidian-text-expander-plugin/blob/main/demo.gif?raw=true)

## Settings

![Settings](https://github.com/akaalias/obsidian-text-expander-plugin/raw/main/settings.png)

## Hacking and Help
This is mostly a proof of concept for myself and it's rather, erm, "pragmatic" code. If you see something you'd like to change, let me know. Here's how you can fiddle around on your own yourself and send a pull-request

### Clone and make new branch
- `cd $VAULT/.obsidian/plugins`
- `git clone https://github.com/akaalias/text-expander-plugin`
- `cd text-expander-plugin`
- `git checkout -b my_branch`
- `git remote add upstream https://github.com/akaalias/text-expander-plugin`

### Install deps
- `npm i && npm install -g prettier && npm install -g eslint`
- `npm run dev`

### Edit
- `git checkout -b my_branch`
- Make your edits
- To check your changes, reload Obsidian (Command-R)

### Commit-prep
- `./ship.sh` will prettify and elsint once again
- `git add -p` to stage changes individually
- `git commit -m "my message"`

### Publish pull request
- `git push -u origin my_branch`
