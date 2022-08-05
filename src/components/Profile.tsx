/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react';
import { useContext } from 'react';

import { ChallengesContext } from '../contexts/Challenges';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)
  const { data } = useSession();

  let name = data?.user?.name!;
  let image = data?.user?.image!;

  return (
    <div className={styles.profileContainer}>
      {data?.user && (
        <>
          <img src={image} alt={name} />
          <div>
            <strong>{name}</strong>
            <p>
              <img src="icons/level.svg" alt="Level" />
              Level {level}
            </p>
          </div>
        </>
      )}
    </div>
  )
}