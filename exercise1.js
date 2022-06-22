const obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};

for (let key in obj) {
    alert(key + ' - это ' + obj[key] + '.');
}