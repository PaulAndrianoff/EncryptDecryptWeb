// ENCRYPT

function encrypt_letter(current) {
    if (key_alpha.value.indexOf(current) != -1) {
        let alphaLen = key_alpha.value.length;
        let x = key_alpha.value.indexOf(current);
        let y = (parseInt(key_a.value) * x + parseInt(key_b.value)) % parseInt(alphaLen);

        return key_alpha.value[y];
    } else {
        return current;
    }
}

function encrypt_string(message) {
    let new_message = '';

    for (let i = 0; i < message.length; i++) {
        new_message += encrypt_letter(message[i]);
    }

    return new_message;
}

// DECRYPTE

function decrypt_letter(current) {
    if (key_alpha.value.indexOf(current) != -1) {
        let x = key_alpha_enc.indexOf(current);

        return key_alpha.value[x];
    } else {
        return current;
    }
}

function decrypt_string(message) {
    let new_message = '';
    decryptTableChar();
    for (let i = 0; i < message.length; i++) {
        new_message += decrypt_letter(message[i]);
    }

    return new_message;
}