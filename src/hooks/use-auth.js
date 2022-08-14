import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, id, nickName } = useSelector(state => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
    nickName,
  };
}
