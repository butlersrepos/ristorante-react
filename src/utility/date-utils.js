export default function parseMilitary(str) {
    str = str || '00:00';
    let parts = str.split(':').map(n => parseInt(n));

    let isPm = parts[0] >= 12;
    parts[0] = isPm ? parts[0] - 12 : parts[0];


    let padTwoZeroes = buffee => leftPad(buffee, 2, '0');
    return `${parts[0]}:${padTwoZeroes(parts[1])}${isPm ? 'p' : 'a'}`;
}

function leftPad(str, size, char) {
    str = '' + str;
    while (str.length < size) {
        str = char + str;
    }
    return str;
}