// Vigenere encryption
function vigener_encrypte_letter(current, letter) {
    if (key_alpha.value.indexOf(current) != -1) {
        let a = key_alpha.value.indexOf(current);
        let b = key_word.value.indexOf(key_word.value[letter % key_word.value.length]);
        let new_letter = (a + b) % key_alpha.value.length;

        return key_alpha.value[new_letter];
    } else {
        return current;
    }
}

function vigener_encrypte(message) {
    let new_message = '';
    for (let i = 0; i < message.length; i++) {
        new_message += vigener_encrypte_letter(message[i], i);
    }

    return new_message;
}

// Vigenere Decrypt
function vigener_decrypte_letter(current, letter) {
    if (key_alpha.value.indexOf(current) != -1) {
        let a = key_alpha.value.indexOf(current);
        let b = key_word.value.indexOf(key_word.value[letter % key_word.value.length]);
        let new_letter = (a - b) % key_alpha.value.length;
        if (new_letter < 0) {
            new_letter += key_alpha.value.length;
        }

        return key_alpha.value[new_letter];
    } else {
        console.log(current);
        return current;
    }
}

function vigener_decrypte(message) {
    let new_message = '';
    for (let i = 0; i < message.length; i++) {
        new_message += vigener_decrypte_letter(message[i], i);
    }

    return new_message;
}