let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let dob = document.getElementById('DOB');
let select_box = document.getElementById('animal');
let sydney = document.getElementById('Sydney');
let melbourne = document.getElementById('Melbourne');
let Adelaide = document.getElementById('Adelaide');
let button = document.getElementById('remove');
let text = document.getElementById('textarea');

function name_valid(name) {
    if (name.length >= 3 && name.length <= 50) {
        return true;
    }
    return false;
}

function parseDate(stringOfDate) {
    // DD/MM/YYYY
    // 0123456789
    const day = stringOfDate.substring(0,2);
    const month = stringOfDate.substring(3,5);
    const year = stringOfDate.substring(6, 10);
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    return new Date(year, month -1, day);
}

function birthday_valid(date) {
    if (date === "")
        return false;
    const re = new RegExp("[0-9]{2}/[0-9]{2}/[0-9]{4}");
    if (!re.test(date)) {
        return false;
    }
    const check_date = parseDate(date);
    if (isNaN(check_date)) {
        return false;
    }
    return true;
}

function getAge(dateString) {
    const today = new Date();
    const birthDate = parseDate(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function render() {
    const age = getAge(dob.value);
    let city = [];
    if (sydney.checked) {
        city.push(sydney.id);
    }
    if (melbourne.checked) {
        city.push(melbourne.id);
    }
    if (Adelaide.checked) {
        city.push(Adelaide.id);
    }
    let selectedValue = select_box.options[select_box.selectedIndex].value;

    // "Hello [first name] [last name], you are [age (integer)] years old, your favourite animal is [favourite animal] and you've lived in [cities]."
    let result = "Hello " + firstname.value + " " + lastname.value + ", you are " + age + " years old, your favourite animal is " + selectedValue + " and you've lived in "

    if (city.length === 0) {
        text.value = result + "no cities.";
    } else {
        let i;
        for (i = 0; i < city.length; i++) {
            if (i === city.length - 1) {
                result = result + city[i] + ".";
            } else {
                result = result + city[i] + ",";
            }
        }
        text.value = result;
    }
}

function check_valid() {
    if (!name_valid(firstname.value)) {
        text.value = "Please input a valid firstname";
    } else {
        if (!name_valid(lastname.value)) {
            text.value = "Please input a valid lastname"
        } else {
            if (!birthday_valid(dob.value)) {
                text.value = "Please enter a valid date of birth";
            } else {
                render();
            }
        }
    }
}

function reset() {
    firstname.value = '';
    lastname.value = '';
    dob.value = '';
    select_box.selectedIndex = 0;
    melbourne.checked = false;
    sydney.checked = false;
    Adelaide.checked = false;
    text.value = '';
}

firstname.addEventListener('blur', (event) => {
    check_valid();
});
lastname.addEventListener('blur', (event) => {
    check_valid();
});
dob.addEventListener('blur', (event) => {
    check_valid();
});
select_box.addEventListener('change', (event) => {
   check_valid();
});
sydney.addEventListener('click', (event) => {
    check_valid();
});
melbourne.addEventListener('change', (event) => {
    check_valid();
});
Adelaide.addEventListener('change', (event) => {
    check_valid();
});
button.addEventListener('click', (event)=>{
    reset();
})