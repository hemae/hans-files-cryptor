"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const hans_cryptor_1 = __importDefault(require("hans-cryptor"));
class FileCrypt {
    decryptTextFileAndParse(filePath, key) {
        try {
            return JSON.parse(hans_cryptor_1.default.decrypt((0, fs_1.readFileSync)(filePath, 'utf8'), key));
        }
        catch (e) {
            throw e;
        }
    }
    encryptObjectAndWriteTextFile(obj, filePath, key) {
        (0, fs_1.writeFileSync)(filePath, hans_cryptor_1.default.encrypt(JSON.stringify(obj), key), 'utf8');
    }
}
exports.default = new FileCrypt();
