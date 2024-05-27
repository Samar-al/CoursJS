function init() {
    const cities = ['Quimper', 'Brest', 'Concarneau', 'Toulouse'];

    let select=document.getElementById("cities");
    cities.forEach(function (val) {
        let option = document.createElement('option');
        option.value = val.toLowerCase();
        option.innerText = val;
        select.append(option)
    });

    select.addEventListener('change', function(){
        let p = document.createElement('p');
        p.innerText = this.value;
        document.body.append(p);
    })
}

window.onload = init;
