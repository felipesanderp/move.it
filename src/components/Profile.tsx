import { useContext } from 'react';
import { ChallengesContext } from '../contexts/Challenges';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/felipesanderp.png" alt="Felipe Sander" />
      <div>
        <strong>Felipe Sander</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}