import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Button, UserWrap } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUser);

  return (
    <UserWrap>
      <h3>Welcome, {name}</h3>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </UserWrap>
  );
};
