// validation script here

/* // first way to define regular expression
let reg = /[a-z]/ig;

// second way to define regular expression
let reg2 = new RegExp(/[a-z]/, 'ig');
 */

// grab input fields from HTML file
const inputs = document.querySelectorAll('input');

console.log(inputs);


// regex patterns
const pattern = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,11}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})*$/
};

// validation function
function validate(field, regex) {
    // console.log(regex.test(field.value));
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

// add eventListener
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, pattern[e.target.attributes.name.value]);
    });
});