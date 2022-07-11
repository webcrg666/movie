import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@/common/components/ui/modal';
import { LoginForm } from '@/common/components/login-form';
import { selectLoginModalStatus } from '@/redux/selectors';
import { authModalSlice } from '@/redux/reducers/authModalSlice';

function LoginFormModal() {
  const dispatch = useDispatch();
  const loginModalActive = useSelector(selectLoginModalStatus);
  const { setModalStatus } = authModalSlice.actions;

  return (
    <Modal
      active={loginModalActive}
      setStatus={() => dispatch(setModalStatus(false))}
    >
      <LoginForm />
    </Modal>
  );
}

export { LoginFormModal };
