import { raw } from "express";
import { readFileSync } from "fs";

export const readJsonFile = (filePath) => {
    console.log("file path", filePath);
    // doc data tu file
    const rawFileContent = readFileSync(filePath).toString();
    console.log("raw file content", typeof rawFileContent, rawFileContent);

    return JSON.parse(rawFileContent);
}
