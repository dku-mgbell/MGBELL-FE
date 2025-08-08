'use client';

import { useEffect, useState } from 'react';
import ToggleSwitch from '@/components/toggle-switch/toggle-switch';
import { useRegisterFCMToken } from '@/hooks/query/notification/useRegisterFCMToken';
import useFcmToken from '@/hooks/useFCMToken';

export function NotificationSwitch() {
  const { requestNotificationPermission } = useFcmToken();
  const [switchOn, setSwitchOn] = useState(false);
  const { mutate: registerFCMToken } = useRegisterFCMToken();
  const handleSwitchChange = () => {
    if (switchOn) {
      setSwitchOn(false);
      localStorage.removeItem('fcmToken');
    } else {
      requestNotificationPermission().then((res) => {
        setSwitchOn(res);
        if (res) {
          registerFCMToken();
        }
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSwitchOn(!!localStorage.getItem('fcmToken'));
    }
  }, []);

  return <ToggleSwitch value={switchOn} onChange={handleSwitchChange} />;
}
