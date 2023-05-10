function extractFile(filePath) {

    let file = filePath.substring(filePath.lastIndexOf('\\') + 1);

    let fileName = file.substring(0, file.lastIndexOf('.'));

    let fileExtension = file.substring(file.lastIndexOf('.') + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}

// extractFile('C:\\Internal\\training-internal\\Template.pptx');
// extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');