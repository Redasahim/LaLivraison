import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/notification'
import ShinBarreMenu from '../newBarreMenu/shinBarreMenu'

function ActivationCompte() {
    const { activation_token } = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/user/activation', { activation_token })
                    setSuccess(res.data.msg)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    }, [activation_token])
    // console.log(`useParams`, activation_token)
    return (
        <div className="active_page">
            <ShinBarreMenu />
            <div className='container'>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

            </div>

        </div>
    )
}

export default ActivationCompte