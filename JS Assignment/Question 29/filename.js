let fileName = prompt("Enter your File Name");

function extnName(fileName) {
    const index = fileName.indexOf(".");
    const extn = fileName.slice(index+1);
    alert(`The Extension name of file ${fileName} is : ${extn}`)
}

extnName(fileName);