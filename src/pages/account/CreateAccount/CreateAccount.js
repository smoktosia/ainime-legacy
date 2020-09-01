import React, { useContext, useState, useEffect } from 'react'

// CONTEXT
import { LangContext } from 'context'

// COMPONENTS
import { Content } from 'components/structure'
import { TILabel, Checkbox, Submit } from 'components/inputs'

// UTILS
import { setTitle, checkAlphanumeric } from 'utils'

// CSS
import style from '../AccountForm.module.css'

// MEDIA
import disgusted from 'resources/imgs/disgusted.png'

// LOC
import loc from 'localisation/ui_public.json'
import loc_err from 'localisation/errors.json'

// const defaultInputState = { value: '', state: false }


const validateUseEffect = ({name, value, error, setError, ok, setOk, lang, cond = null}, validateFunction) => {
    return () => {
        let timeout = null
        const _error = {...error}

        const removeErrorState = () => {
            if(_error[name]) {
                delete _error[name]
                setError(_error)
            }
        }

        const setErrorState = err => {
            _error[name] = loc_err[lang].inputs[name][err]
            setError(_error)
            setOkState(false)
        }

        const setOkState = bool => {
            const _ok = {...ok}
            if(bool) {
                if(!_ok[name]) {
                    _ok[name] = true
                    setOk(_ok)
                }
            } else if(_ok.username) {
                delete _ok.username
                setOk(_ok)
            }
        }

        if(cond === null) cond = value.length > 0

        if(cond) {

            timeout = setTimeout(() => {
                validateFunction({value, setErrorState, removeErrorState, setOkState})
            }, 500)

        } else {
            removeErrorState()
            setOkState(false)
        }

        return () => clearTimeout(timeout)

    }
}



const CreateAccount = () => {

    // INPUTS STATES
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ pass2, setPass2 ] = useState('')
    const [ checkbox, setCheckbox ] = useState('')

    const [ error, setError ] = useState({})
    const [ ok, setOk ] = useState({})

    const lang = useContext(LangContext)

    // validate effects

    // username
    useEffect(validateUseEffect({
        name: 'username', value: username,
        error, setError, ok, setOk, lang
    }, ({value, setErrorState, removeErrorState, setOkState}) => {

        if(value.length < 3)
            return setErrorState('length')
        if(!checkAlphanumeric(value))
            return setErrorState('alpha')

        // TODO: check if username is taken

        removeErrorState()
        setOkState(true)

    }), [username])


    // password
    useEffect(validateUseEffect({
        name: 'pass', value: pass,
        error, setError, ok, setOk, lang
    }, ({value, setErrorState, removeErrorState, setOkState}) => {

        if(value.length < 6)
            return setErrorState('length')
        // if(!checkAlphanumeric(value))
        //     return setErrorState('alpha')


        removeErrorState()
        setOkState(true)

    }), [pass])

    // all
    useEffect(() => {
        if(ok.length >= 5 && error.length === 0)
            alert('good')
    }, [error, ok])


    // initial effect
    useEffect(() => {
        setTitle(loc[lang].accounts.create_account)
    }, [lang])



    return(
        <Content>

            <div className={style.form}>

                {/* FORM HEADER */}
                <h2 className='h'>{ loc[lang].accounts.create_account }</h2>

                {/* INPUTS */}

                <div
                    className={style.inputs}
                >
                    <TILabel
                        name='username'
                        autoComplete='off'
                        focusBar

                        value={username}
                        onChange={({target: {value}}) => setUsername(value)}
                    >
                        { loc[lang].accounts.username }
                    </TILabel>

                    {
                        error.username && error.username
                    }

                    <TILabel
                        name='email'
                        type='email'
                        autoComplete='off'
                        focusBar

                        value={email}
                        onChange={({target: {value}}) => setEmail(value)}
                    >
                        E-mail
                    </TILabel>

                    {/* {
                        error.email && error.email
                    } */}

                    <TILabel
                        type='password'
                        name='password'
                        autoComplete='off'
                        focusBar

                        value={pass}
                        onChange={({target: {value}}) => setPass(value)}
                    >
                        { loc[lang].accounts.password }
                    </TILabel>

                    {
                        error.pass && error.pass
                    }

                    <TILabel
                        type='password'
                        name='password2'
                        autoComplete='off'
                        focusBar

                        value={pass2}
                        onChange={({target: {value}}) => setPass2(value)}
                    >
                        { loc[lang].accounts.password_confirm }
                    </TILabel>

                    <div className={style.checkbox}>
                        <Checkbox
                            checked={checkbox}
                            onChange={({target: { checked }}) => setCheckbox(checked)}
                        />
                        I have read and agree to the Term of Service and Privacy Policy
                    </div>

                    <Submit disabled>
                        { loc[lang].accounts.create_account }
                    </Submit>

                </div>

            </div>

            <img
                className={style.fixedImage}
                src={disgusted}
                alt=''
            />
        </Content>
    )
}

export default CreateAccount