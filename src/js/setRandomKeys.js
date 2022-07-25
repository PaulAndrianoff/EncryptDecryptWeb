const range_min_a = document.querySelector('#range_min_a');
const range_max_a = document.querySelector('#range_max_a');
const range_min_b = document.querySelector('#range_min_b');
const range_max_b = document.querySelector('#range_max_b');
const range_min = document.querySelector('#range_min');
const set_random_key = document.querySelector('.set_random_key');

function setAffineKey() {
    do {
        key_a.value = rand(range_min_a.value, range_max_a.value);
        key_b.value = rand(range_min_b.value, range_max_b.value);
    } while (verify_key() == false);
}

function setVigenerKey() {
    let newKeyWord = '';

    for (let i = 0; i < range_min.value; i++) {
        let randChar = rand(key_alpha.value.length - 1);
        newKeyWord += key_alpha.value[randChar];
    }

    key_word.value = newKeyWord;
}


set_random_key.addEventListener('click', function(e) {
    e.preventDefault();
    setAffineKey();
    setVigenerKey();
});