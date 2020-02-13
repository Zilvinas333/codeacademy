import "./assets/styles/app.scss";
import "./assets/images/avatar.jpg";
import "./assets/images/chart.svg";
import "./assets/images/colors.svg";
import "./assets/images/component.svg";
import "./assets/images/extras.svg";
import "./assets/images/form.svg";
import "./assets/images/format_shapes.svg";
import "./assets/images/graphic.svg";
import "./assets/images/home.svg";
import "./assets/images/logo.svg";
import "./assets/images/logo2.svg";
import "./assets/images/mail.svg";
import "./assets/images/maps.svg";
import "./assets/images/menu.svg";
import "./assets/images/notification.svg";
import "./assets/images/pages.svg";
import "./assets/images/search.svg";
import "./assets/images/square.svg";
import "./assets/images/tables.svg";
import "./assets/images/text.svg";
import "./index.hbs";
import "./about.hbs";
import "./pricing.hbs";
import "./assets/styles/nav.scss";
import "./assets/styles/pricing.scss";
//import "bootstrap";

console.log(document.querySelector('[data-toggle]'));

document.querySelector('[data-toggle]').addEventListener('click', function(event) {
    console.log(event.target.dataset.toggle); //galima parasyt tiesiog event ir zr console, ten ismeta ivairia informacija
    let element = event.target.dataset.toggle;
    document.querySelectorAll('[data-' + element + ']').forEach(function(el){ //lauztiniai skliaustai naudojami tik data- atributui
        console.log(el); //element tai jis ima duomenis is ten kur ivyko eventas, jei paziuret pvz i nav.hbs tai ten bus
        //data-sidenav
        el.classList.toggle('small');
    }); 
});
