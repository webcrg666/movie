import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@/components/UI/modal/Modal';
import { LoginForm } from '@/components/loginForm';
import { getLoginModalActive } from '@/redux/selectors';
import { setLoginModal } from '@/redux/actions';

function LoginFormModal() {
  const dispatch = useDispatch();
  const loginModalActive = useSelector(getLoginModalActive);

  return (
    <Modal
      active={loginModalActive}
      setActive={() => dispatch(setLoginModal(false))}
    >
      <LoginForm />
    </Modal>
  );
}

export { LoginFormModal };
