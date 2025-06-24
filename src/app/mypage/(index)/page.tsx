import Footer from './_components/footer';
import Menu from './_components/menu';
import UserProfile from './_components/user-profile/index';
import UserSavings from './_components/user-savings/index';
import UserStats from './_components/user-stats/index';

export default function Page() {
  return (
    <>
      <UserProfile />
      <UserStats />
      <UserSavings />
      <Menu />
      <Footer />
    </>
  );
}
