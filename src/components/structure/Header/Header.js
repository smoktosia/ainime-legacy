import React, { useContext } from 'react'

import classnames from 'classnames'
import { Link } from 'react-router-dom'

// CONTEXT
import { LangContext } from 'context'

// WS NAME
import { app_name } from 'config/app.json'

// ICON
import { FaBars } from 'react-icons/fa'

// COMPONENTS
import { Button, TextInput } from 'components/inputs'

// style
import style from './Header.module.css'

import loc from 'localisation/ui_public.json'

const Header = () => {

    const lang = useContext(LangContext)

    return(
        <header
            title="Header"
            className={style.container}
        >
            {/* NAV BTN AND LOGO */}
            <div className={style.first}>

                <Button
                    tabIndex='0'
                    title='Open navigation bar'
                >
                    <FaBars />
                </Button>

                <div className={style.titleBox}>
                    <Link to='/' className='na selectable'>
                        <h1 className={classnames(style.title, 'h')}>
                            {app_name}
                        </h1>
                    </Link>
                </div>

            </div>

            {/* SEARCH BAR */}
            <div className={style.second}>

                <TextInput
                    center focusBar
                    type='search'
                    placeholder='Search'
                    containerClassName={style.searchBar}

                    tabIndex='0'
                />

            </div>

            {/* ACCOUNT */}
            <div className={style.third}>

                <Link to='/account/sign-in' className='na selectable'>
                    { loc[lang].accounts.sign_in }
                </Link>

                <Link to='/account/create-account' className='na selectable'>
                    { loc[lang].accounts.create_account }
                </Link>

            </div>
        </header>
    )
}

export default Header