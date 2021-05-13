// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const postmanToOpenApi = require('postman-to-openapi');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "collection-to-openapi" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('collection-to-openapi.convert-to-openapi', function () {
		// The code you place here will be executed every time your command is executed
		const editor = vscode.window.activeTextEditor;
		if(editor){
			const document = editor.document;
			let sourceFile = document.fileName.toString();
			let ymlFile    = sourceFile.replace('.json','.yml');
			console.log(`yml filename ${ymlFile}`);
			postmanToOpenApi(sourceFile,ymlFile,{defaultTag: 'General'})
			.then(result => {
				vscode.window.showInformationMessage('File Converted!');
			})
			.catch(err => {
				console.log(err);
				vscode.window.showErrorMessage(`Error in File conversion-->${err}`);
			})
		}else{
			vscode.window.showErrorMessage('Please select valid postman collection json file');
		}
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from Collection to OpenAPI!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
