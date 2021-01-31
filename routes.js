import React, { useEffect } from 'react';
import Loading from './routes/Loading';

export default function Routes() {
  const [tokenStatus, setTokenStatus] = useState(1);
  const [token, setToken] = useState(''); // token

  // acredito que esteja abrindo a conexao com o react
  useEffect(() => {
    // setando o token = um item do storage react
    setToken(localStorage.getItem('task-token'));
    checkToken(token);
  }, [token]);

  if (tokenStatus === 1) {
    return <Loading />;
  }
}
