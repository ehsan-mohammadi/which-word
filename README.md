# Which Word?

> A vscode extension to guess words that sound like your word.

<img src="https://github.com/ehsan-mohammadi/which-word/blob/master/img/WhichWord-Icon.png" width="120"/>

When you're coding in `vscode`, you may forget the spelling of an english word! It's take time to check the correct spelling and then return to the vscode and continue coding. So, this extension enables you to correct most mistakes.

When you doubt spelling a word, you can simply highlight that word and then press `ctrl + shift + p` and type `Which Word?`. The extension returns you the words that sound like your word. When several corrections are possible, you can see a list of corrections and select one of them.

This extension, use [`datamuse API`](https://www.datamuse.com/api/).

<p align="center"><img src="https://github.com/ehsan-mohammadi/which-word/blob/master/img/WhichWord-GIF.gif"/></p>

## Getting started

If you just want to use this extension, follow this steps:

- Clone a copy of the repo: `git clone "https://github.com/ehsan-mohammadi/which-word.git"`
- Change to the directory: `cd which-word`
- Install dependencies: `npm install`
- Copy the `which-word` folder under your extensions folder (`.vscode/extensions`). Depending on your platform it is located:
  - **Windows:** `%USERPROFILE%\.vscode\extensions`
  - **Linux:** `$HOME/.vscode/extensions`
  - **Mac:** `$HOME/.vscode/extensions`

But if you want to run the extension, follow these simple steps:

- Clone a copy of the repo: `git clone "https://github.com/ehsan-mohammadi/which-word.git"`
- Change to the directory: `cd which-word`
- Install dependencies: `npm install`
- Press `F5` to run the extension.

After that, When you doubt spelling a word, just highlight that and press `ctrl + shift + p` and type `Which Word?`. The extension shows you a list of possible corrections and you can select one of them.

**NOTE:** You need Internet to use this extension.

## License

This repository is available to anybody free of charge, under the terms of MIT License (See [LICENSE](../master/LICENSE)).