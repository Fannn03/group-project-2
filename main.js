const prompt = require('prompt-sync')()

const mainPage = () => {

    console.clear()

    console.log('Main Page - Management Stock');
    console.log('--------------------');
    console.log('History Shipment :\n');
    console.log('--------------------');
    console.log('1. Client Zone');
    console.log('2. Product Zone');
    console.log('0. Exit');

    const input = prompt('Enter number : ')

    if(!input) {
        console.log('Input cannot be null');
        return setTimeout(() => mainPage(), 2000)
    }

    console.log('Invalid input!');
    return setTimeout(() => mainPage(), 2000)

}