# collection-to-openapi README
"collection-to-openapi" converts the postman collection to OpenAPI specification version 3.0.0.

This extension is based on the open source NodeJs library "postman-to-openapi" https://www.npmjs.com/package/postman-to-openapi

## Requirements

An up-to-date Visual Studio Code installation is all you need.

## How to USE?

Open the Postman collection json file and press Ctrl+Shift+P (Windows User), Cmd+Shift+P(Mac User) and type command "Convert to OpenAPI". Extension automatically creates the OpenAPI specification file with "yml" extension in the same directory.

## Known Issues

Only works with Postman collection json files. 

## Release Notes

### 0.0.1

Initial release of collection-to-openapi, includes postman collection json file conversion to OpenAPI specification

## Point-to-Ponder

While exporting the postman collection, please remove the passwords, client ids and credentials, as these also gets exported and gets converted in OpenAPI specification.

**Enjoy!**
