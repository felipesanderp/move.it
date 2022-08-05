import { FormEvent } from "react";
import { signOut } from 'next-auth/react';
import { Trophy, House, SignOut } from 'phosphor-react';

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {

  function handleSignOut(event: FormEvent) {
    event.preventDefault();
    signOut();
  }

  return (
    <div className={styles.container}>
      <img src="/logo-full.svg" alt="move.it" />
      <div className={styles.buttons}>
        <button type="button">
          <div></div>
          <House size={32} />
        </button>
        <button type="button" disabled>
          <div></div>
          <Trophy size={32} />
        </button>

        <div className={styles.logOut}>
          <button type="button" onClick={handleSignOut}>
            <div></div>
            <SignOut size={28} />
          </button>
        </div>
      </div>
    </div >
  );
}