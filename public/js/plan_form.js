// Activity form inline
const form_days = document.querySelectorAll('.new_activity_overview');
const addActivityBtn = document.querySelectorAll('.add_activity_btn')
const addActivityImg = document.querySelectorAll('.add_activity_img')

const allForms = document.querySelectorAll('form');
const close_form = document.querySelectorAll('.close_form')

const checkboxWrapper = document.querySelectorAll('.checkbox_wrapper')
const dateOfDay = document.querySelectorAll("[data-date]")


if (form_days) {

    checkboxWrapper.forEach((result) => {
        result.innerHTML = "";
    })

    addActivityImg.forEach((result, index) => {
        addActivityImg[index].addEventListener('click', () => {
            let targetDate = dateOfDay[index].getAttribute('data-date');

            allForms.forEach(result => {
                result.classList.remove('showForm');
            })

            form_days.forEach(result => {
                result.classList.remove('grow');
            })

            addActivityImg.forEach(result => {
                result.classList.remove('hide')
            })

            addActivityBtn.forEach(result => {
                result.classList.remove('hide')
            })

            checkboxWrapper.forEach((result) => {
                result.innerHTML = "";
            })




            renderForm(checkboxWrapper[index], targetDate);

            allForms[index].classList.add('showForm');
            form_days[index].classList.add('grow')
            addActivityBtn[index].classList.add('hide');
            addActivityImg[index].classList.add('hide');
        })
    })

    close_form.forEach((result, index) => {
        close_form[index].addEventListener('click', () => {
            addActivityBtn[index].classList.remove('hide');
            addActivityImg[index].classList.remove('hide');
            form_days[index].classList.remove('grow');
            allForms[index].classList.remove('showForm');
        })
    })

}

function renderForm(form, date) {
    // todays date
    let dateDay = document.createElement('input')
    dateDay.setAttribute('type', 'hidden');
    dateDay.setAttribute('id', 'date_plan_activity');
    dateDay.setAttribute('name', 'date_plan_activity');
    dateDay.value = date;

    // wandelen
    let wandelen = document.createElement('input');
    wandelen.setAttribute('type', 'checkbox');
    wandelen.setAttribute('id', 'plan_wandelen');
    wandelen.setAttribute('name', 'plan_wandelen')

    let wandelenLabel = document.createElement('label');
    wandelenLabel.setAttribute('for', 'plan_wandelen')
    wandelenLabel.innerHTML = 'Wandelen'

    let wandelenIMG = document.createElement('img');
    wandelenIMG.src = 'images/walking.svg'
    wandelenIMG.setAttribute('alt', 'icon walking');

    // boodschappen
    let boodschappen = document.createElement('input');
    boodschappen.setAttribute('type', 'checkbox');
    boodschappen.setAttribute('id', 'plan_boodschappen');
    boodschappen.setAttribute('name', 'plan_boodschappen')

    let boodschappenLabel = document.createElement('label');
    boodschappenLabel.setAttribute('for', 'plan_boodschappen')
    boodschappenLabel.innerHTML = 'Boodschappen'

    let boodschappenIMG = document.createElement('img');
    boodschappenIMG.src = 'images/walking.svg'
    boodschappenIMG.setAttribute('alt', 'icon boodschappen');

    // stofzuigen
    let stofzuigen = document.createElement('input');
    stofzuigen.setAttribute('type', 'checkbox');
    stofzuigen.setAttribute('id', 'plan_stofzuigen');
    stofzuigen.setAttribute('name', 'plan_stofzuigen')

    let stofzuigenLabel = document.createElement('label');
    stofzuigenLabel.setAttribute('for', 'plan_stofzuigen')
    stofzuigenLabel.innerHTML = 'Stofzuigen'

    let stofzuigenIMG = document.createElement('img');
    stofzuigenIMG.src = 'images/walking.svg'
    stofzuigenIMG.setAttribute('alt', 'icon stofzuigen');

    // tuinieren
    let tuinieren = document.createElement('input');
    tuinieren.setAttribute('type', 'checkbox');
    tuinieren.setAttribute('id', 'plan_tuinieren');
    tuinieren.setAttribute('name', 'plan_tuinieren')

    let tuinierenLabel = document.createElement('label');
    tuinierenLabel.setAttribute('for', 'plan_tuinieren')
    tuinierenLabel.innerHTML = 'Tuinieren'

    let tuinierenIMG = document.createElement('img');
    tuinierenIMG.src = 'images/walking.svg'
    tuinierenIMG.setAttribute('alt', 'icon tuinieren');

    // fietsen
    let fietsen = document.createElement('input');
    fietsen.setAttribute('type', 'checkbox');
    fietsen.setAttribute('id', 'plan_fietsen');
    fietsen.setAttribute('name', 'plan_fietsen')

    let fietsenLabel = document.createElement('label');
    fietsenLabel.setAttribute('for', 'plan_fietsen')
    fietsenLabel.innerHTML = 'Fietsen'

    let fietsenIMG = document.createElement('img');
    fietsenIMG.src = 'images/walking.svg'
    fietsenIMG.setAttribute('alt', 'icon fietsen');

    // oefeningen
    let oefeningen = document.createElement('input');
    oefeningen.setAttribute('type', 'checkbox');
    oefeningen.setAttribute('id', 'plan_oefeningen');
    oefeningen.setAttribute('name', 'plan_oefeningen')

    let oefeningenLabel = document.createElement('label');
    oefeningenLabel.setAttribute('for', 'plan_oefeningen')
    oefeningenLabel.innerHTML = 'Oefeningen'

    let oefeningenIMG = document.createElement('img');
    oefeningenIMG.src = 'images/walking.svg'
    oefeningenIMG.setAttribute('alt', 'icon oefeningen');

    // overige
    let overige = document.createElement('input');
    overige.setAttribute('type', 'checkbox');
    overige.setAttribute('id', 'plan_overige');
    overige.setAttribute('name', 'plan_overige')

    let overigeLabel = document.createElement('label');
    overigeLabel.setAttribute('for', 'plan_overige')
    overigeLabel.innerHTML = 'Overige'

    let overigeIMG = document.createElement('img');
    overigeIMG.src = 'images/walking.svg'
    overigeIMG.setAttribute('alt', 'icon overige');

    form.appendChild(dateDay);
    form.appendChild(wandelen);
    form.appendChild(wandelenLabel).appendChild(wandelenIMG);
    form.appendChild(boodschappen);
    form.appendChild(boodschappenLabel).appendChild(boodschappenIMG);
    form.appendChild(stofzuigen);
    form.appendChild(stofzuigenLabel).appendChild(stofzuigenIMG);
    form.appendChild(tuinieren);
    form.appendChild(tuinierenLabel).appendChild(tuinierenIMG);
    form.appendChild(fietsen);
    form.appendChild(fietsenLabel).appendChild(fietsenIMG);
    form.appendChild(oefeningen);
    form.appendChild(oefeningenLabel).appendChild(oefeningenIMG);
    form.appendChild(overige);
    form.appendChild(overigeLabel).appendChild(overigeIMG);

}