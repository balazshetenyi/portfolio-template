import Link from 'next/link'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { useState } from 'react'

export default function LoginPage() {
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')

    return (
        <section className="login-page">
            <Link href="/api/auth/login">Login</Link>
            <form>
                <span className="p-float-label">
                    <InputText id="in" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="in">Felhasznalonev</label>
                </span>

                <Password value={pwd} onChange={(e) => setPwd(e.target.value)} />
            </form>

            <style jsx>{`
                .login-page {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
            `}</style>
        </section>
    )
}
