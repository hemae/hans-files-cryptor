declare class FileCrypt {
    decryptTextFileAndParse<ObjectType>(filePath: string, key: string): ObjectType;
    encryptObjectAndWriteTextFile(obj: Object, filePath: string, key: string): void;
}
declare const _default: FileCrypt;
export default _default;
