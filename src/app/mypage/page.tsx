'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BellImage from '@/assets/images/review/bell-not-bad.png';
import BellIcon from '@/assets/svg/BellIcon';
import CO2Icon from '@/assets/svg/CO2Icon';
import MoneyPocketIcon from '@/assets/svg/MoneyPocketIcon';
import ReviewIcon from '@/assets/svg/ReviewIcon';
import HeadphoneIcon from '@/assets/svg/HeadphoneIcon';
import SettingsIcon from '@/assets/svg/SettingsIcon';
import MenuButton from './(components)/menu-button/menu-button';
import * as styles from './styles.css';

export default function Page() {
  // TODO API 연결
  const route = useRouter();

  const activityDetails = {
    usage: {
      name: '마감벨 이용 횟수',
      value: '3회',
      icon: BellIcon,
    },
    environment: {
      name: '탄소 절감',
      value: '3회',
      icon: CO2Icon,
    },
    money: {
      name: '절감한 금액',
      value: '3,200원',
      icon: MoneyPocketIcon,
    },
  };

  const buttonData = {
    review: {
      event: () => {
        route.push('review');
      },
      name: '리뷰관리',
      icon: ReviewIcon,
    },
    customerCenter: {
      event: () => {
        window.open('https://pf.kakao.com/_ZDJzn');
      },
      name: '고객센터',
      icon: HeadphoneIcon,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.settingsButton}>
        <Link href="/mypage/settings">
          <SettingsIcon />
        </Link>
      </div>
      <div className={styles.backgroundContent}>
        <div>
          <div className={styles.profile}>
            <Image src={BellImage.src} width={108} height={108} alt="profile" />
          </div>
          <p className={styles.nickName}>이름</p>
        </div>
        <div className={styles.activityContainer}>
          {Object.entries(activityDetails).map(([key, activity], index) => (
            <Fragment key={key}>
              <div className={styles.activityItem}>
                <activity.icon />
                <p className={styles.activityName}>{activity.name}</p>
                <p className={styles.activityValue}>{activity.value}</p>
              </div>
              {index < 2 && <hr className={styles.activityDivider} />}
            </Fragment>
          ))}
        </div>
      </div>
      <div className={styles.sheet}>
        <header className={styles.header}>
          <p className={styles.orderTitle}>주문현황</p>
          <Link className={styles.orderPageLink} href="/order">
            주문상세
          </Link>
        </header>
        <div className={styles.orderContainer}>
          <Link
            href="/order/1"
            className={styles.pickUpButton}
            style={{
              backgroundImage:
                "url('https://mgbell-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8B%AC%EC%BD%A4%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC%2Fb1.png')",
            }}
          >
            <div className={styles.pickUpButtonContent}>
              <strong className={styles.pickUpStore}>하고메</strong>
              <p className={styles.pickUpTime}>19:00까지 픽업하시면 됩니다.</p>
            </div>
          </Link>
        </div>
        <div className={styles.menuButtonContainer}>
          {Object.entries(buttonData).map(([key, button]) => (
            <MenuButton
              key={key}
              event={button.event}
              name={button.name}
              icon={button.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}