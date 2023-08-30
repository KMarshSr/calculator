const ipAddress = document.querySelector('#ipAddress');
const subnetMask = document.querySelector('#subnetMask');
const calculate = document.querySelector('#button');

function runProgram() {
    if(validateIPAddress()) {
        console.log(convertSubnetMaskToCIDR());
        console.log(convertSubnetMaskToInverseMask());
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
            inverseMask = '0.127.255.255'
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

function ()

calculate.addEventListener('click', runProgram);




