import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/56928630?s=460&u=62f6dd5a4b204f5fb1d6da3840526e0c8a8000b9&v=4" alt="Lucas Rodrigues" />
      <div>
        <strong>Lucas Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}