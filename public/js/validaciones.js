//console.log("funcionando")
window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const direccion = document.getElementById('direccion')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const passConfirma = document.getElementById('passConfirma')
    //console.log(apellido)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim()
        const apellidoValor = apellido.value.trim()
        const direccionValor = direccion.value.trim()
        const emailValor = email.value.trim()
        const passwordValor = password.value.trim()
        const passConfirmaValor = passConfirma.value.trim();
     
        //validando campo nombre
        if(!nombreValor){
            validaFalla(nombre, 'Campo vacío')
        }else{
            validaOk(nombre)
        }

        //validando campo apellido
        if(!apellidoValor){
            validaFalla(apellido, 'Campo vacío')
        }else{
            validaOk(apellido)
        }

        //validando campo direccion
        if(!direccionValor){
            validaFalla(direccion, 'Campo vacío')
        }else{
            validaOk(direccion)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Campo vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
         //validando campo password
         const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
         if(!passwordValor) {
             validaFalla(password, 'Campo vacío')
         } else if (passwordValor.length < 8) {             
             validaFalla(password, 'Debe tener 8 caracteres cómo mínimo.')
         } else if (!passwordValor.match(er)) {
             validaFalla(password, 'Debe tener al menos una may., una min. y un núm.')
         } else {
             validaOk(password)
         }

         //validando campo password Confirmación
         if(!passConfirmaValor){
             validaFalla(passConfirma, 'Confirme su password')
         } else if(passwordValor !== passConfirmaValor) {
             validaFalla(passConfirma, 'La password no coincide')
         } else {
             validaOk(passConfirma)
         }


    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-group falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-group ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})