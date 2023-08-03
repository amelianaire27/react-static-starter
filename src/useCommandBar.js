import React from 'react';
import { useNavigate } from 'react-router-dom';
import { init } from 'commandbar';

init('81136260');

const useCommandBar = () => {
  const loggedInUserId = '12345'; // example
    window.CommandBar.boot(loggedInUserId);

    const navigate = useNavigate();

  React.useEffect(() => {
    function router(url) {
      navigate(url);
    }

    window.CommandBar.addRouter(router);
  }, [navigate]);

};

export default useCommandBar;

