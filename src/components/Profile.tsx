import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://www.flaticon.com/svg/vstatic/svg/3237/3237472.svg?token=exp=1614311964~hmac=473a8e8719d7d8bd5de835f8d24a2cb8" alt="Gabriel Santos" />
      <div>
        <strong>Usuário do move.it</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}