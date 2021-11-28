import {readFileSync, writeFileSync} from 'fs'
import crypt from 'hans-cryptor'


export type CryptDocumentType<ItemType> = {
    items: ItemType[]
}

export function decryptTextFileAndParse<ItemType>(filePath: string, key: string): ItemType[] {
    try {
        const object = JSON.parse(
            crypt.decrypt(
                readFileSync(filePath, 'utf8'), key
            )) as CryptDocumentType<ItemType>
        return object.items
    } catch (e) {
        throw e
    }
}

export function encryptObjectAndWriteTextFile(obj: Object, filePath: string, key: string, objectName?: string): void {
    writeFileSync(filePath, crypt.encrypt(JSON.stringify({[`${objectName || 'items'}`]: obj}), key), 'utf8')
}