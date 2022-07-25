function pgcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
        var tmp = a;
        a = b;
        b = tmp;
    }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

function bezuteCode(key, alphaLen) {
    try {
        let a = key
        let b = alphaLen
        let u = 1
        let v = 0
        let u1 = 0
        let v1 = 1

        while (b != 0) {
            let q = parseInt(a / b);
            let tempA = a;
            let tempU = u;
            let tempV = v;
            tempA, tempU, tempV = a, u, v
            a, u, v = b, u1, v1

            b = tempA - q * b
            u1 = tempU - q * u1
            v1 = tempV - q * v
        }
        return u
    } catch (error) {
        return error;
    }
    return null;
}


function verify_key() {
    let alpha = key_alpha.value;
    let a = key_a.value;
    let b = key_b.value;

    if (a % b == 0) {
        a += b;
    }

    if (pgcd(a, alpha.length) == 1 && a != 0) return true;
    else return false;
}