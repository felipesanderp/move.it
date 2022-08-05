import { GetServerSideProps } from 'next';
import { getSession, signIn, } from 'next-auth/react'

import { Envelope, GithubLogo, GoogleLogo } from 'phosphor-react'
import { FormEvent } from 'react';
import { Logo } from '../components/Logo';

import styles from '../styles/pages/SignIn.module.css';

export default function SignIn() {
  function handleGithubSignIn(event: FormEvent) {
    event.preventDefault();

    signIn('github');
  }

  return (
    <div className={styles.signInContainer}>
      <div className={styles.content}>
        <div />
        <aside>
          <div className={styles.loginForm}>
            <Logo />

            <span>Bem-vindo</span>
            <p>Faça login com seu GitHub para começar</p>
            <div className={styles.icons}>
              <button type="button" onClick={handleGithubSignIn}>
                <GithubLogo size={30} />
                Entrar
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ ctx });

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}