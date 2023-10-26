let years = prompt('Enter your year of birth')
if (!years) {
    alert(`Sad you didn\'t enter your year of birth`);
}
yearsOld = 2022 - years;


let city = prompt('what city do you live in?');

let str1, str2, str3, str4;
if (!city) {
    alert(`Sad you didn\'t enter your city`)
} else if (city === 'Kyiv') {
    str1 = 'You live in the capital of Ukraine';
} else if (city === 'London') {
    str2 = 'You live in the capital of England';
} else if (city === 'Washington') {
    str3 = 'You live in the capital of USA';
} else {
    str4 = 'You live in ' + city
}


let sport = prompt('what is your favorite sport?');
let str5, str6, str7, str8;
if (!sport) {
    alert(`Sad you didn\'t enter your favorite sport`)
} else if (sport == 'box') {
    str5 = 'Cool! Do you want to be Tyson?'
} else if (sport == 'tennis') {
    str6 = 'Cool! Do you want to be Federer?'
} else if (sport == 'football') {
    str7 = 'Cool! Do you want to be Leo Messi?'
} else {
    str8 = 'Cool You\'re like ' + sport
}

alert(`You\'re ${yearsOld} old` + '\n' + (str1 || str2 || str3 || str4) + '\n' + (str5 || str6 || str7 || str8))
