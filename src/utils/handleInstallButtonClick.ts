export const handleInstallButtonClick = () => {
  const iosLink = 'https://apps.apple.com/app/id6746954675';
  const androidLink =
    'https://play.google.com/store/apps/details?id=com.trendflow.magambell.app';

  const userAgent = navigator.userAgent || navigator.vendor;

  if (/iPad|iPhone|iPod/.test(userAgent) || /Mac|Macintosh/.test(userAgent)) {
    window.open(iosLink, '_blank');
  } else {
    window.open(androidLink, '_blank');
  }
};
