// ADD RANDOME STRING

function randString(length, alphaContent) {
    tempString = ''
    for (let i = 0; i < length; i++) {
        let rand_int = rand(0, alphaContent.length - 1);
        tempString += key_alpha.value[rand_int];
    }

    return tempString
}

function addString(message) {
    let a = key_a.value + key_b.value
    let b = key_word.value.length;
    let newMessage = "";

    if (b - a > 0) newMessage = randString(b, key_b.value);

    let i = 0
    while (i < message.length) {
        newMessage = newMessage + message[i]
        if (i % a == 0) newMessage = newMessage + randString(b, key_alpha.value)
        i = i + 1
    }

    if (b - a > 0) newMessage = newMessage + randString(b, key_a.value);

    return newMessage
}

// REMOVE RANDOME STRING
function removeString(message) {
    let a = key_a.value + key_b.value
    let b = key_word.value.length;
    let i = 0

    if (b - a > 0) message = message.slice(b, message.length - b);

    while (i < message.length) {
        if (i % a == 0) message = message.slice(0, i + 1) + message.slice(i + b + 1, message.length);
        i = i + 1
    }
    return message
}