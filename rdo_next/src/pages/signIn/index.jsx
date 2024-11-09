import React from 'react';
import styles from './index.module.css';
import ContainerPage  from '@/components/Front/ContainerPage';

const SignIn = () => {
  return (
    <ContainerPage>
      <h1 className={styles.title}>Sign In</h1>
      <form className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input type="email" id="email" className={styles.input} />
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input type="password" id="password" className={styles.input} />
        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </form>
    </ContainerPage>
  );
};

export default SignIn;
