class LangService {

    list = ['pl', 'en']

    quickGetLang() {
        return this.getLocalStorage() || 'en'
    }

    getLocalStorage() {
        return localStorage.getItem('lang')
    }

    checkFromList(value) {
        if(this.list.includes(value))
            return value
        else return 'en'
    }

    setLocalStorage(value) {
        value = this.checkFromList(value)
        localStorage.setItem('lang', value)
    }

    getBrowserLang() {
        return window.navigator.userLanguage || window.navigator.language
    }
}

export default LangService