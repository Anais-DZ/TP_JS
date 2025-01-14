// TODO : L'EVAL API METEO

const cardMeteo = document.querySelector('.cardMeteo');

const i = document.querySelector('i');
const button = document.querySelector('button');

const info = document.createElement('div')
    info.style.height = '300px';
    info.style.width = '200px';
    info.style.marginTop = '16px';
    info.style.marginBottom = '16px';
    info.style.border = '3px, solid, grey';
    info.style.padding = '16px 12px 24px 12px'
    
cardMeteo.insertBefore(info, button);

function addInfo () {
    info.innerText = '';
};
addInfo()


function bouton() {
    button.classList.add('button__cardMeteo')
};



button.addEventListener('mousedown', () => {
    button.style.backgroundColor = 'orange'
    bouton()
});
document.addEventListener('mouseup', () => {
    button.style.backgroundColor = 'green';
});



const contactApiMeteo = async () => {
    const response = await fetch('https://prevision-meteo.ch/services/json/toulouse');

    const dataTransformed = await response.json();
    console.log(dataTransformed);

    const data = dataTransformed

    info.innerText = `Aujourd'hui le temps est :

                    ${data.current_condition.condition} 

                    et la température est de 
                    ${data.current_condition.tmp}°C 

                    T° Max = ${data.fcst_day_0.tmax} - T° Min = ${data.fcst_day_0.tmin}`;
    info.style.color = 'black';
    info.style.fontSize = '16px'
    info.style.fontFamily = 'arial'
    
}   
contactApiMeteo();
