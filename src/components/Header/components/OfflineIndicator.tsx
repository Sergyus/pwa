import IconButton from '@material-ui/core/IconButton';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import React from 'react';
import './indicator.scss';
import { Badge } from '@material-ui/core';

export default function OfflineIndicator(): JSX.Element {
  const [offline, setOffline] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('online', onlineListener);
    window.addEventListener('offline', offlineListener);
    return () => {
      window.removeEventListener('offline', onlineListener);
      window.removeEventListener('offline', offlineListener);
    };
  }, []);

  const onlineListener = (event: Event) => {
    console.log('online', event);
    setOffline(false);
  };

  const offlineListener = (event: Event) => {
    console.log('offline', event);
    setOffline(true);
  };

  return (
    <div className="indicator">
      {offline ? (
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary" variant="dot">
            <WifiOffIcon />
          </Badge>
          <p>OFFLINE</p>
        </IconButton>
      ) : null}
    </div>
  );
}
