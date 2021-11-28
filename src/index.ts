import {readFileSync, writeFileSync} from 'fs'
import crypt from 'hans-cryptor'


class FileCrypt {
    decryptTextFileAndParse<ObjectType>(filePath: string, key: string): ObjectType {
        try {
            return JSON.parse(
                crypt.decrypt(
                    readFileSync(filePath, 'utf8'), key
                )) as ObjectType
        } catch (e) {
            throw e
        }
    }
    encryptObjectAndWriteTextFile(obj: Object, filePath: string, key: string): void {
        writeFileSync(filePath, crypt.encrypt(JSON.stringify(obj), key), 'utf8')
    }
}

export default new FileCrypt()