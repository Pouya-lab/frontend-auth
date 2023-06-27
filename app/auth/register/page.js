"use client";

import Card from '@/components/card/page'
import PasswordInput from '@/components/passwordInput/page'
import {TiUserAddOutline} from 'react-icons/ti'
import {React , useState} from 'react';
import Link from 'next/link';
import styles from '../auth.module.scss'
//for using states we need to import both state and react and also add use client at the top of our page


const initialState = {
    name : "" ,
    password : "" ,
    password2 : "" ,
    email : ""
}

function Register() {

    const [formData , setFormData] = useState(initialState)
    const {name , email , password , password2 } = formData
    //code above helps us to write name and other properties easier than formData.name , formData.email and .....

    const handleInputeChange = () =>{

    }

    const loginUser = () =>{

    }

  return (
    <>
        <div className={` container ${styles.auth}` }>
            <Card>
                <div className={styles.form}>

                    <div className="--flex-center">
                        <TiUserAddOutline size={35} color='#999' />
                    </div>
                    <h2>
                        Register
                    </h2>

                    <p className="--text-center --fw-bold" >or</p>

                    <form onSubmit={loginUser} action="" >
                        <input 
                        type="text" 
                        placeholder='Name'
                        required
                        name='name'
                        value={name}
                        onChange={handleInputeChange}
                        />
                         <input 
                        type="email" 
                        placeholder='email'
                        required
                        name='email'
                        value={email}
                        onChange={handleInputeChange}
                        />
                        <PasswordInput
                            type="password" 
                            placeholder='password'
                            required
                            name='password'
                            value={password}
                            onChange={handleInputeChange}
                        />
                        <PasswordInput
                            type="password" 
                            placeholder=' Confirm Password'
                            required
                            name='password2'
                            value={password2}
                            onChange={handleInputeChange}
                        />
                        <button type='submit' className='--btn --btn-primary w-full' >
                            Register
                        </button>
                    </form>
                    <span className={styles.register} >
                        <Link href='/' >Home</Link>
                        <p> &nbsp; Already have an account?</p>
                        <Link href="/auth/login" >
                            Login
                        </Link>
                    </span>
                </div>
            </Card>
        </div>
    </>
  )
}

export default Register