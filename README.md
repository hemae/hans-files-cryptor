# hans-files-cryptor
file cryptor with hans-cryptor for node.js

## Table of contents
* [Features](#features)
* [Installing](#installing)
* [Example](#example)
    + [encryptObjectAndWriteTextFile](#encryptObjectAndWriteTextFile)
    + [decryptTextFileAndParse](#decryptTextFileAndParse)
    

<a name="features"><h2>Features</h2></a>
* encrypting and decrypting strings by password using Vigenere method

<a name="installing"><h2>Installing</h2></a>
Add the package to your project
```
npm i hans-files-cryptor
```

<a name="example"><h2>Example</h2></a>

Export fileCrypt from *hans-files-cryptor*

```javascript
const fileCrypt = require('hans-files-cryptor')
```
using TypeScript
```typescript
import fileCrypt from 'hans-files-cryptor'
```

<a name="encryptObjectAndWriteTextFile"><h3>encryptObjectAndWriteTextFile</h3></a>        

```typescript
type UserType = {id: string, name: string}
const obj = {id: 'spme id', name: 'Hans'}
const filePath = './encryptedFiles/hansUser.dat'
const key = 'some key'
encryptObjectAndWriteTextFile(obj, filePath, key)
```

<a name="decryptTextFileAndParse"><h3>decryptTextFileAndParse</h3></a>        

```typescript
const obj = decryptTextFileAndParse<UserType>(filePath, key)
console.log(obj) // Object {id: string, name: string}
```

