# collection-to-openapi
"collection-to-openapi" converts the postman collection to OpenAPI specification version 3.0.0 and also converts the openAPI to postman collection.

This extension is based on the open source NodeJs libraries "postman-to-openapi" https://www.npmjs.com/package/postman-to-openapi and "openapi-to-postmanv2" https://www.npmjs.com/package/openapi-to-postmanv2 

## Tech
Collection to OpenAPI is built with Javascript. No javascript frameworks used.

## How to USE?

Open the Postman collection json file and press Ctrl+Shift+P (Windows User), Cmd+Shift+P(Mac User) and type command "Convert to OpenAPI". Extension automatically creates the OpenAPI specification file with "yml" extension in the same directory.

To convert the OpenAPI specification to postman collection, type command "Convert to Postman Collection" in the command pallet.

## Known Issues

Only works with Postman collection. 

## Release Notes

### 1.0.0

Initial release of collection-to-openapi, includes postman collection json file conversion to OpenAPI specification and OpenAPI specification to postman collection

## Point-to-Ponder

While exporting the postman collection, please remove the passwords, client ids and credentials, as these also gets exported and gets converted in OpenAPI specification.

**Enjoy!**
