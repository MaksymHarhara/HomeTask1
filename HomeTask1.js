const os = require("os");

function revert(i) {
    let len = i.length;
    let mas = '';
    while (len > 0) {
        mas += i.substring(len - 1, len);
        len--;
    }
    process.stdout.write(mas);
    process.stdout.write(os.EOL)
}

function reverseString (str) {
    return str.split('').reverse().join('')
}

process.stdin.on('data', function(data) {
    process.stdout.write(reverseString(data.toString()));
    process.stdout.write(os.EOL);
});