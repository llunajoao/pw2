import flags from './model/flags.js';

const main = document.querySelector('main');

for (const flag of flags) {
    const flagupper = flag.id.toUpperCase();
    main.insertAdjacentHTML('beforeend', Flaghtml(flag, flagupper));
}


function Flaghtml(flag, flagupper){
    return `<div class="flag col-2 my-2 text-center">
        <img src="https://flagsapi.com/${flagupper}/flat/64.png" alt="${flag.name}">
        <p>${flag.name}</p>
    </div>`;
}