const key_a = document.querySelector('.key_a');
const key_b = document.querySelector('.key_b');
const key_word = document.querySelector('.key_word');
const key_alpha = document.querySelector('.key_alpha');
const submit = document.querySelector('.submit');
const text_in = document.querySelector('.main_message');
const encryption_type = document.querySelector('.encryption_type');
const savePath = "";

let key_alpha_enc = '';

const reverse_function = {
    'enc_affine': 'dec_affine',
    'dec_affine': 'enc_affine',
    'enc_vigener': 'dec_vigener',
    'dec_vigener': 'enc_vigener',
    'add_rand_string': 'remove_rand_string',
};

const options = {
    'enc_affine': {
        name: 'Affine - Encrypt',
        function: 'encrypt_string',
        show: true,
    },
    'dec_affine': {
        name: 'Affine - Decrypt',
        function: 'decrypt_string',
        show: false,
    },
    'enc_vigener': {
        name: 'Vigener - Encrypt',
        function: 'vigener_encrypte',
        show: true,
    },
    'dec_vigener': {
        name: 'Vigener - Decrypt',
        function: 'vigener_decrypte',
        show: false,
    },
    'add_rand_string': {
        name: 'Add random string',
        function: 'addString',
        show: true,
    },
    'remove_rand_string': {
        name: 'Remove rand string',
        function: 'removeString',
        show: false,
    },
};

let options_text = '';
for (const [key, value] of Object.entries(options)) {
    if (value['show']) {
        options_text += `<option value="${key}">${value['name']}</option>`;
    }
}

encryption_type.innerHTML = options_text;