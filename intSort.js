function sortInteger(input) {
    return parseInt(input.toString().split('').sort((a,b) => a - b).join(''))
}

sortInteger(2651);
sortInteger(000);
sortInteger(0);
sortInteger(1);
sortInteger(8725162538401923);




