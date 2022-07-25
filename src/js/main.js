const orders = document.querySelector('.order .current_order');
const clear_order = document.querySelector('.order .clear');
const reverse_order = document.querySelector('.order .encAll');
const reverse_default_order = document.querySelector('.order .reverse_default_order');
const set_order = document.querySelector('.order .setorder');
const popup = document.querySelector('.popup.upload_files');
const curatain = document.querySelector('.curtain');
const popup_close = document.querySelector('.popup.upload_files .close');
const file_upload = document.querySelector('.upload_files #upload--file');
const file_order_upload = document.querySelector('.upload_files #upload--file--order');
const file_key_upload = document.querySelector('.upload_files #upload--file--key');
const btn_open_file = document.querySelector('.open--file');
const btn_save_file = document.querySelector('.save--file');
const btn_save_order = document.querySelector('.save--order');
const btn_save_keys = document.querySelector('.save--keys');

const set_rand_keys = document.querySelector('.set_rand_keys');
const rand_key = document.querySelector('.rand_key');
const set_rand_keys_close = document.querySelector('.set_rand_keys .close');
let step_order = [];



function print_step_order() {
    orders.innerHTML = '';
    let step = 1;
    if (step_order.length == 0) {
        orders.innerHTML += '<div><span>No order</span></div>';
    } else {
        for (let i = step_order.length - 1; i >= 0; i--) {
            try {
                orders.innerHTML += '<div><span>' + step + '</span>' +
                    '<span>' + options[step_order[i]]['name'] + '</span></div>';
            } catch (error) {
                orders.innerHTML += '<span>' + step_order[i] + '</span>';
            }
            step++;
        }
    }
}

// CONTROLLER
function app_controller(methode) {
    try {
        return window[options[methode]['function']](text_in.value);
    } catch (error) {
        return 'Undefiend method';
    }
}

function decryptTableChar() {
    key_alpha_enc = encrypt_string(key_alpha.value);
}

set_order.addEventListener('click', function() {
    if (verify_key()) {
        step_order = [];
        for (let i = default_order.length - 1; i >= 0; i--) {
            text_in.value = app_controller(default_order[i]);
            step_order.push(default_order[i]);
            print_step_order();
        }
        print_step_order();
    } else alert("Le message n'a pas pu etre traitee");
});

clear_order.addEventListener('click', function() {
    step_order = [];
    print_step_order();
});

reverse_order.addEventListener('click', function(e) {
    if (verify_key()) {
        for (let i = step_order.length - 1; i >= 0; i--) {
            text_in.value = app_controller(reverse_function[step_order[i]]);
        }

        step_order = [];
        print_step_order();
    } else alert("Le message n'a pas pu etre traitee");
});

reverse_default_order.addEventListener('click', function(e) {
    if (verify_key()) {
        for (let i = default_order.length - 1; i >= 0; i--) {
            text_in.value = app_controller(reverse_function[default_order[i]]);
        }

        print_step_order();
    } else alert("Le message n'a pas pu etre traitee");
});

submit.addEventListener('click', function() {
    if (verify_key()) {
        text_in.value = app_controller(encryption_type.value);
        step_order.push(encryption_type.value);
        print_step_order();
    } else alert("Le message n'a pas pu etre traitee");
});

key_a.addEventListener('change', function() {
    ar = bezuteCode(key_a.value, key_alpha.value.length);
    decryptTableChar();
});

popup_close.addEventListener('click', function(e) {
    popup.classList.remove('active');
    curatain.classList.remove('active');
});

btn_open_file.addEventListener('click', function(e) {
    popup.classList.add('active');
    curatain.classList.add('active');
});

rand_key.addEventListener('click', function(e) {
    set_rand_keys.classList.add('active');
    curatain.classList.add('active');
});

set_rand_keys_close.addEventListener('click', function() {
    set_rand_keys.classList.remove('active');
    curatain.classList.remove('active');
});

function handleFileLoad(event) {
    text_in.value = event.target.result;
    console.log(event.target.result);
    popup.classList.remove('active');
    curatain.classList.remove('active');
}

function handleFileOrderLoad(event) {
    let temp_order = event.target.result.split(/\r?\n|\r/);
    default_order = temp_order;
    popup.classList.remove('active');
    curatain.classList.remove('active');
}

function handleFileKeyLoad(event) {
    let temp_order = event.target.result.split(/\r?\n|\r/);
    console.log(temp_order);
    key_a.value = temp_order[0];
    key_b.value = temp_order[1];
    key_word.value = temp_order[2];
    key_alpha.value = temp_order[3];
    popup.classList.remove('active');
    curatain.classList.remove('active');
}

file_upload.addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = handleFileLoad;
    reader.readAsText(e.target.files[0]);
});

file_order_upload.addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = handleFileOrderLoad;
    reader.readAsText(e.target.files[0]);
});

file_key_upload.addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = handleFileKeyLoad;
    reader.readAsText(e.target.files[0]);
});

btn_save_file.addEventListener('click', function() {
    let blob = new Blob([text_in.value], { type: "text/plain;charset=utf-8" });
    saveAs(blob, savePath + "message.txt");
    console.log('ok');
});

btn_save_order.addEventListener('click', function() {
    let currentTextOrder = step_order.join('\n');
    let blob = new Blob([currentTextOrder], { type: "text/plain;charset=utf-8" });
    saveAs(blob, savePath + "order.txt");
})

btn_save_keys.addEventListener('click', function() {
    let currentTextKeys = key_a.value + "\n" + key_b.value + "\n" + key_word.value + "\n" + key_alpha.value;
    let blob = new Blob([currentTextKeys], { type: "text/plain;charset=utf-8" });
    saveAs(blob, savePath + "keys.txt");
});