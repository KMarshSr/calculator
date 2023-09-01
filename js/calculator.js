const ipAddress = document.querySelector('#ipAddress');
const subnetMask = document.querySelector('#subnetMask');
const calculate = document.querySelector('#button');

function runProgram() {
    if(validateIPAddress()) {
        console.log(convertSubnetMaskToCIDR());
        console.log(convertSubnetMaskToInverseMask());
        console.log(convertSubnetMaskToBinary());
        console.log(convertIPAddressToBinary());
    }
}

function validateIPAddress() {
    if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress.value)) {
        console.log(`${ipAddress.value} \n ${subnetMask.value}`);
        return true;
    }
    else {
        alert('You have entered an invalid IP address');
        return false;
    }
}

function convertSubnetMaskToCIDR() {
    let cidr = '';
    switch(subnetMask.value) {
        case '255.0.0.0/8':
            cidr = '/8';
            break;
        case '255.128.0.0/9':
            cidr = '/9'
            break;
        case '255.192.0.0/10':
            cidr = '/10';
            break;
        case '255.224.0.0/11':
            cidr = '/11';
            break;
        case '255.240.0.0/12':
            cidr = '/12';
            break;
        case '255.248.0.0/13':
            cidr = '/13';
            break;
        case '255.252.0.0/14':
            cidr = '/14';
            break;
        case '255.254.0.0/15':
            cidr = '/15';
            break;
        case '255.255.0.0/16':
            cidr = '/16';
            break;
        case '255.255.128.0/17':
            cidr = '/17';
            break;
        case '255.255.192.0/18':
            cidr = '/18';
            break;
        case '255.255.224.0/19':
            cidr = '/19';
            break;
        case '255.255.240.0/20':
            cidr = '/20';
            break;
        case '255.255.248.0/21':
            cidr = '/21';
            break;
        case '255.255.252.0/22':
            cidr = '/22';
            break;
        case '255.255.254.0/23':
            cidr = '/23';
            break;
        case '255.255.255.0/24':
            cidr = '/24';
            break;
        case '255.255.255.128/25':
            cidr = '/25';
            break;
        case '255.255.255.192/26':
            cidr = '/26';
            break;
        case '255.255.255.224/27':
            cidr = '/27';
            break;
        case '255.255.255.240/28':
            cidr = '/28';
            break;
        case '255.255.255.248/29':
            cidr = '/29';
            break;
        case '255.255.255.252/30':
            cidr = '/30';
            break;
        case '255.255.255.254/31':
            cidr = '/31';
            break;
        case '255.255.255.255/32':
            cidr = '/32';
            break;
    }
    return cidr;
}

function convertSubnetMaskToInverseMask() {
    let inverseMask = '';

    switch(subnetMask.value) {
        case '255.0.0.0/8':
            inverseMask = '0.255.255.255';
            break;
        case '255.128.0.0/9':
            inverseMask = '0.127.255.255';
            break;
        case '255.192.0.0/10':
            inverseMask = '0.63.255.255';
            break;
        case '255.224.0.0/11':
            inverseMask = '0.31.255.255';
            break;
        case '255.240.0.0/12':
            inverseMask = '0.15.255.255';
            break;
        case '255.248.0.0/13':
            inverseMask = '0.7.255.255';
            break;
        case '255.252.0.0/14':
            inverseMask = '0.3.255.255';
            break;
        case '255.254.0.0/15':
            inverseMask = '0.1.255.255';
            break;
        case '255.255.0.0/16':
            inverseMask = '0.0.255.255';
            break;
        case '255.255.128.0/17':
            inverseMask = '0.0.127.255';
            break;
        case '255.255.192.0/18':
            inverseMask = '0.0.63.255';
            break;
        case '255.255.224.0/19':
            inverseMask = '0.0.31.255';
            break;
        case '255.255.240.0/20':
            inverseMask = '0.0.15.255';
            break;
        case '255.255.248.0/21':
            inverseMask = '0.0.7.255';
            break;
        case '255.255.252.0/22':
            inverseMask = '0.0.3.255';
            break;
        case '255.255.254.0/23':
            inverseMask = '0.0.1.255';
            break;
        case '255.255.255.0/24':
            inverseMask = '0.0.0.255';
            break;
        case '255.255.255.128/25':
            inverseMask = '0.0.0.127';
            break;
        case '255.255.255.192/26':
            inverseMask = '0.0.0.63';
            break;
        case '255.255.255.224/27':
            inverseMask = '0.0.0.31';
            break;
        case '255.255.255.240/28':
            inverseMask = '0.0.0.15';
            break;
        case '255.255.255.248/29':
            inverseMask = '0.0.0.7';
            break;
        case '255.255.255.252/30':
            inverseMask = '0.0.0.3';
            break;
        case '255.255.255.254/31':
            inverseMask = '0.0.0.1';
            break;
        case '255.255.255.255/32':
            inverseMask = '0.0.0.0';
            break;
    }
    return inverseMask;
}

function convertSubnetMaskToBinary() {
    let subnetMaskBinary = '';

    switch(subnetMask.value) {
        case '255.0.0.0/8':
            subnetMaskBinary = '11111111.00000000.00000000.00000000';
            break;
        case '255.128.0.0/9':
            subnetMaskBinary = '11111111.10000000.00000000.00000000';
            break;
        case '255.192.0.0/10':
            subnetMaskBinary = '11111111.11000000.00000000.00000000';
            break;
        case '255.224.0.0/11':
            subnetMaskBinary = '11111111.11100000.00000000.00000000';
            break;
        case '255.240.0.0/12':
            subnetMaskBinary = '11111111.11110000.00000000.00000000';
            break;
        case '255.248.0.0/13':
            subnetMaskBinary = '11111111.11111000.00000000.00000000';
            break;
        case '255.252.0.0/14':
            subnetMaskBinary = '11111111.11111100.00000000.00000000';
            break;
        case '255.254.0.0/15':
            subnetMaskBinary = '11111111.11111110.00000000.00000000';
            break;
        case '255.255.0.0/16':
            subnetMaskBinary = '11111111.11111111.00000000.00000000';
            break;
        case '255.255.128.0/17':
            subnetMaskBinary = '11111111.11111111.10000000.00000000';
            break;
        case '255.255.192.0/18':
            subnetMaskBinary = '11111111.11111111.11000000.00000000';
            break;
        case '255.255.224.0/19':
            subnetMaskBinary = '11111111.11111111.11100000.00000000';
            break;
        case '255.255.240.0/20':
            subnetMaskBinary = '11111111.11111111.11110000.00000000';
            break;
        case '255.255.248.0/21':
            subnetMaskBinary = '11111111.11111111.11111000.00000000';
            break;
        case '255.255.252.0/22':
            subnetMaskBinary = '11111111.11111111.11111100.00000000';
            break;
        case '255.255.254.0/23':
            subnetMaskBinary = '11111111.11111111.11111110.00000000';
            break;
        case '255.255.255.0/24':
            subnetMaskBinary = '11111111.11111111.11111111.00000000';
            break;
        case '255.255.255.128/25':
            subnetMaskBinary = '11111111.11111111.11111111.10000000';
            break;
        case '255.255.255.192/26':
            subnetMaskBinary = '11111111.11111111.11111111.11000000';
            break;
        case '255.255.255.224/27':
            subnetMaskBinary = '11111111.11111111.11111111.11100000';
            break;
        case '255.255.255.240/28':
            subnetMaskBinary = '11111111.11111111.11111111.11110000';
            break;
        case '255.255.255.248/29':
            subnetMaskBinary = '11111111.11111111.11111111.11111000';
            break;
        case '255.255.255.252/30':
            subnetMaskBinary = '11111111.11111111.11111111.11111100';
            break;
        case '255.255.255.254/31':
            subnetMaskBinary = '11111111.11111111.11111111.11111110';
            break;
        case '255.255.255.255/32':
            subnetMaskBinary = '11111111.11111111.11111111.11111111';
            break;
    }
    return subnetMaskBinary;
}

function convertIPAddressToBinary() {
    let decimals = ipAddress.value.split('.');
    let octet1 = decimals[0];
    let octet2 = decimals[1];
    let octet3 = decimals[2];
    let octet4 = decimals[3];
    let quotient = 0;
    const binaryArray1 = [];
    const binaryArray2 = [];
    const binaryArray3 = [];
    const binaryArray4 = [];

    do {
        quotient = ~~(octet1 / 2);
        remainder = octet1 % 2;
        octet1 = quotient;
        binaryArray1.push(remainder);
    }
    while (quotient !== 0) 

    binaryArray1.reverse();

    while (binaryArray1.length < 8) {
        binaryArray1.unshift(0);
    }

    do {
        quotient = ~~(octet2 / 2);
        remainder = octet2 % 2;
        octet2 = quotient;
        binaryArray2.push(remainder);
    }
    while (quotient !== 0) 

    binaryArray2.reverse();

    while (binaryArray2.length < 8) {
        binaryArray2.unshift(0);
    }

    do {
        quotient = ~~(octet3 / 2);
        remainder = octet3 % 2;
        octet3 = quotient;
        binaryArray3.push(remainder);
    }
    while (quotient !== 0) 

    binaryArray3.reverse();

    while (binaryArray3.length < 8) {
        binaryArray3.unshift(0);
    }

    do {
        quotient = ~~(octet4 / 2);
        remainder = octet4 % 2;
        octet4 = quotient;
        binaryArray4.push(remainder);
    }
    while (quotient !== 0) 

    binaryArray4.reverse();

    while (binaryArray4.length < 8) {
        binaryArray4.unshift(0);
    }

    const binaryArray1String = binaryArray1.join("");
    const binaryArray2String = binaryArray2.join("");
    const binaryArray3String = binaryArray3.join("");
    const binaryArray4String = binaryArray4.join("");
    const finalArrayString = binaryArray1String +  "." + binaryArray2String + "." + binaryArray3String + "." + binaryArray4String;
    return finalArrayString;

}

calculate.addEventListener('click', runProgram);




