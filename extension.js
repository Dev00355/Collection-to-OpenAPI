// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require("fs");
const postmanToOpenApi = require('postman-to-openapi');
const openApiToPostman = require('openapi-to-postmanv2');
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
	let disposable1 = vscode.commands.registerCommand('collection-to-openapi.convert-to-collection', function () {
		// The code you place here will be executed every time your command is executed
		const editor = vscode.window.activeTextEditor;
		let collectionFile;
		if(editor){
			const document = editor.document;
			let sourceFile = document.fileName.toString();
			if( (sourceFile.includes('yml')) || (sourceFile.includes('yaml'))){
				if( sourceFile.includes('yml') ) {
					collectionFile = sourceFile.replace(".yml", ".json");
				} else {
					collectionFile = sourceFile.replace(".yaml", ".json");
				}
			} else {
				collectionFile = sourceFile.split('.');
				collectionFile = collectionFile[0] + "_collection." + collectionFile[1];
			}
			console.log(`collection filename ${collectionFile}`);
			openapidata = fs.readFileSync(sourceFile, { encoding: "UTF-8" });
			openApiToPostman.convert(
				{ type: "string", data: openapidata },
				{},
				(err, conversionResult) => {
					if (!conversionResult.result) {
						console.log('Could not convert', conversionResult.reason);
					}else {
						fs.writeFile(
							collectionFile,
							JSON.stringify(conversionResult.output[0].data),
							(err)=>{
								if(err) console.log(err);
								else {
									vscode.window.showInformationMessage('File Converted!');
								}
							}
						);
					}
				}
			);
			
		}else{
			vscode.window.showErrorMessage('Please select valid OpanAPI file');
		}
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from Collection to OpenAPI!');
	});
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable1);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
