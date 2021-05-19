
/**
 * enviar el nombre de usuario
 */
const initFormEvens = () => {
    const form = document.forms.formulariologin;
    const userNew = form.elements.elements.nameUser;

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();

        if (userNew.value != "") {
            localStorage.setItem("nombreUsuario", userNew.value);
            user.push({
                nameUserNew: userNew.value,
                points: 0
            });
            localStorage.getItem("nombreUsuario");
        }

    });
};


/**
 * variable para el usuario
 */

const user = [{
    nameUserNew: " ",
    points: 123443,
}];

// ventanamodal //


let cerrar = document.querySelectorAll(".close") [0]; 
let modal =document.querySelectorAll (".ventana")[0]; 
let modalC= document.querySelectorAll



