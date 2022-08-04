import { Envelope, GithubLogo, GoogleLogo } from 'phosphor-react'
import { Logo } from '../components/Logo';

import styles from '../styles/pages/SignIn.module.css';

export default function SigIn() {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.content}>
        <div />
        <aside>
          <div className={styles.loginForm}>
            <Logo />

            <span>Bem-vindo</span>
            <p>Faça login com seu E-mail, GitHub ou Google para começar</p>
            <div className={styles.icons}>
              <Envelope size={30} />

              <button>
                <GithubLogo size={30} />
              </button>

              <GoogleLogo size={30} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}