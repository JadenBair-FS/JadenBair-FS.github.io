import React, { useRef } from 'react'
import styles from './BentoBox.module.css'
import emailjs from '@emailjs/browser'


const BentoBoxContact = () => {

    const emailServiceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
    const emailTemplateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
    const emailPublicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY

    const form = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(emailServiceId, emailTemplateId, form.current, {
            publicKey: emailPublicKey,
          })
            .then((result) => {
            console.log(result.text)
            })
            .catch((error) => {
            console.log(error.text)
            })
    }
    return (
        <form ref={form} className={styles.contactForm}  onSubmit={handleSubmit}>
            <section className={styles.contactFormTop}>
                <div className={styles.contactFormHeader}>
                    <h1>Contact me</h1>
                    <p>Send me a message!</p>
                </div>
                <div className={styles.contactFormTopInputs}>
                    <input 
                        type="text" 
                        placeholder='Your name' 
                        name="from_name" 
                    />
                    <input 
                        type="email" 
                        placeholder='Your email' 
                        name="reply_to"
                    />
                </div>
            </section>
            <section className={styles.contactFormBottom}> 
                <textarea 
                    type="text" 
                    placeholder='Your message' 
                    name="message" 
                />
                <button className={styles.contactFormButton} type="submit">Send</button>
            </section>
    </form>
    )
}

export default BentoBoxContact
