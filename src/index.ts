import {readFileSync, writeFileSync, readdirSync, mkdirSync} from 'fs'
import crypt from 'hans-cryptor'


const ENCODING = 'utf8'

function createFile(filePath: string, content: string) {
    try {
        writeFileSync(filePath, content, ENCODING)
    } catch {
        let path = './'
        const splitPath = filePath.split('/')
        for (let item of splitPath) {
            const dirContent = readdirSync(path)
            path = path + '/' + item
            if (dirContent.indexOf(item) === -1) {
                if (item.split('.').length === 1) {
                    mkdirSync(path)
                } else {
                    writeFileSync(filePath, content, ENCODING)
                }
            }
        }
    }
}

class FileCrypt {
    decryptTextFileAndParse<ObjectType>(filePath: string, key: string): ObjectType {
        try {
            return JSON.parse(
                crypt.decrypt(
                    readFileSync(filePath, ENCODING), key
                )) as ObjectType
        } catch (e) {
            throw e
        }
    }
    encryptObjectAndWriteTextFile(obj: Object, filePath: string, key: string): void {
        createFile(filePath, crypt.encrypt(JSON.stringify(obj), key))
    }
}

export default new FileCrypt()