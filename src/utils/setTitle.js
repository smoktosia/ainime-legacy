import { app_name } from 'config/app.json'

function setTitle(str) {
    if(!str)
        document.title = app_name
    else document.title = `${str} - ${app_name}`
}

export default setTitle