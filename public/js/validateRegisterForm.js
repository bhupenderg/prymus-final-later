
class validateRegisterForm {
    constructor() {
        this.allFields = document.querySelectorAll('.registerField')
        this.insertValidationElements()
        this.name = document.querySelector("#register-name")
        this.name.previousVlaue = ''
        this.events()
    }

    // Events

    events() {
        this.name.addEventListener('keyup', () => {
            this.isDifferent(this.name, this.nameHandler)
        })
    }

    // Methods

    isDifferent(el, handler) {
        if(el.previousVlaue !== el.value){
            handler.call(this)
        }
        el.previousVlaue = el.value
    }

    nameHandler() {
        this.name.errors = false
        this.nameImmediately()
        clearTimeout(this.name.timer)
        this.name.timer = setTimeout(() => {
            this.nameAfterDelay()
        }, 2000)
    }

    nameImmediately() {
        if(this.name.value !== "" && !/^([a-zA-Z_ ]+)$/.test(this.name.value)) {
            this.shaowValidationError(this.name, "Name can only contain letters.")
        }
        if(!this.name.errors){
            this.hideValidationErrors(this.name)
        }
    }

    hideValidationErrors(el) {
        el.nextElementSibling.classList.remove('liveValidateMessage--visible')
    }

    shaowValidationError(el, message) {
        el.nextElementSibling.innerHTML = message
        el.nextElementSibling.classList.add('liveValidateMessage--visible')
        el.errors = true
    }

    nameAfterDelay() {
        if(this.name.value.length < 3) {
            this.shaowValidationError(this.name, 'Name must be atleast 3 characters.')
        }
    }

    insertValidationElements() {
        console.log(this.allFields)
        // this.allFields.insertAdjacentHTML('afterend', '<div class="alert alert-danger liveValidateMessage liveValidateMessage--visible"></div>')
        let inputArr = Array.from(this.allFields)
        inputArr.forEach(el => {
            el.insertAdjacentHTML('afterend', '<div class="alert liveValidateMessage">')
        })
        //this.allFields.insertAdjacentHTML('afterend', '<h1>Hello There!</h1>')
    }





}

new validateRegisterForm()