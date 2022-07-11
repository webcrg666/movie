import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './login-form.module.scss';
import { login } from '@/redux/actions';
import { authModalSlice } from '@/redux/reducers/authModalSlice';

function LoginForm() {
  const dispatch = useDispatch();
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { setModalStatus } = authModalSlice.actions;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const loginValid = loginValue === 'user1';
    const passwordValid = passwordValue === 'qwe';

    if (loginValid && passwordValid) {
      dispatch(login());
      dispatch(setModalStatus(false));
    }

    setLoginValue('');
    setPasswordValue('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.hint}>
        <div>Дефолтный логин: user1</div>
        <div>Дефолтный пароль: qwe</div>
      </div>

      <input
        type="text"
        placeholder="Введите логин"
        className={styles.inputText}
        value={loginValue}
        onChange={(e) => setLoginValue(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Введите пароль"
        className={styles.inputText}
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        required
      />
      <input type="submit" value="Войти" className={styles.submitButton} />
    </form>
  );
}

export { LoginForm };
