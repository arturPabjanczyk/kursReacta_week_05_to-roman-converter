
function toRoman(arabic) {
    let roman = "none";
    if (arabic == 5) {
        roman = "V"
    }
    if (arabic == 1) {
        roman = "I"
    }
    return roman;
}

export {toRoman};