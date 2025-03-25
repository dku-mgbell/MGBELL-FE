'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BellImage from '@/assets/images/review/bell-not-bad.png';
import BellIcon from '@/assets/svg/BellIcon';
import CO2Icon from '@/assets/svg/CO2Icon';
import HeadphoneIcon from '@/assets/svg/HeadphoneIcon';
import MoneyPocketIcon from '@/assets/svg/MoneyPocketIcon';
import ReviewIcon from '@/assets/svg/ReviewIcon';
import SettingsIcon from '@/assets/svg/SettingsIcon';
import MenuButton from '@/components/button/menu-button/menu-button';
import { useGetUserActivity } from '@/hooks/query/user/useGetUserActivity';
import { commaizeNumber } from '@/utils/commaizeNumber';
import * as styles from './styles.css';

export default function Page() {
  const route = useRouter();
  const { data, isLoading } = useGetUserActivity();

  const activityDetails = {
    usage: {
      name: '마감벨 이용 횟수',
      value: `${isLoading ? '0' : data?.orderCount}회`,
      icon: BellIcon,
    },
    environment: {
      name: '탄소 절감',
      value: `${isLoading ? '0' : Number(data?.carbonReduction).toFixed(1)}kgCO2`,
      icon: CO2Icon,
    },
    money: {
      name: '절감한 금액',
      value: `${commaizeNumber(data?.totalDiscount ?? 0)}원`,
      icon: MoneyPocketIcon,
    },
  };

  const buttonData = {
    review: {
      event: () => {
        route.push('/mypage/review');
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
          <p className={styles.nickName}>{data?.name}</p>
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
          {data?.currentOrders.toReversed().map((order) => (
            <Link
              key={order.id}
              href={`/order/${order.id}`}
              className={styles.pickUpButton}
              style={{
                backgroundImage: `url('${order.image}')`,
              }}
            >
              <div className={styles.pickUpButtonContent}>
                <strong className={styles.pickUpStore}>
                  {order.storeName}
                </strong>
                <p className={styles.pickUpTime}>
                  {order.orderState === 'REQUESTED'
                    ? '매장에서 주문을 확인 중입니다.'
                    : `${order.pickupTime} 픽업 예정입니다.`}
                </p>
              </div>
            </Link>
          ))}
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
