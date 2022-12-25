import styles from './index.module.scss';

import { Page } from '../../components/Page';
import { Header } from '../../layouts/Header';
import { Body } from '../../components/Body';
import { IntroBlock } from './sections/IntroBlock';
import { Image } from '../../components/Image';

import feature_1 from '../../assets/images/icon_feature_1.svg';
import feature_2 from '../../assets/images/icon_feature_2.svg';

import main from '../../assets/images/img_main.png';

const mainData = {
  intro: {
    title: 'E-COURSE PLATFORM',
    quote: `Learning and teaching online, made easy.`,
    text: `Practice your English and learn new things with the our platform.`,
    features: [
      { name: 'Popular Words', count: 30, icon: feature_1 },
      { name: 'Mini-Game', count: 1, icon: feature_2 },
    ],
  },
  image: {
    src: main,
    alt: 'Gay with book',
  },
};

const MainPage = () => {
  return (
    <Page className={styles.page}>
      <Header />
      <Body className={styles.page__body}>
        <IntroBlock data={mainData.intro} />
        <Image
          alt={mainData.image.alt}
          src={mainData.image.src}
          className={styles.page__image}
        />
      </Body>
    </Page>
  );
};

export { MainPage };
