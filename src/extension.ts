import * as vscode from 'vscode';
import fetch from 'node-fetch';

export function activate(context: vscode.ExtensionContext) {

	let provider = vscode.commands.registerCommand('extension.whichword', async () => {

		// Get the vscode editor
		const editor = vscode.window.activeTextEditor;

		// Check the editor is opened or not
		if(!editor)
		{
			// Show the error message
			vscode.window.showErrorMessage("Editor doesn't active yet!");
			return;
		}

		// Get the selected text of the editor
		const text = editor.document.getText(editor.selection);

		// Wait for response from the API
		const response = await fetch(`https://api.datamuse.com/words?sl=${text.replace(" ", "+")}`);
		const data = await response.json();

		// Create a QuickPick to let pick an item from a list
		const quickPick = vscode.window.createQuickPick();
		quickPick.items = data.map((x: any) => ({label: x.word}));
		quickPick.onDidChangeSelection(([item]) => {
			if(item)
			{
				// Replace the word
				editor.edit((edit) => {
					edit.replace(editor.selection, item.label);
				});
				quickPick.dispose();
			}
		});
		quickPick.onDidHide(() => quickPick.dispose());
		quickPick.show();
	});

	context.subscriptions.push(provider);
}

export function deactivate() {}
