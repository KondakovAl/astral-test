import styles from './index.module.scss';

import { Body } from '../../components/Body';
import { IntroBlock } from './sections/IntroBlock';
import { Image } from '../../components/Image';
import { mock } from '../../mock/mock';

const MainPage = () => {
  return (
    <Body className={styles.page__body}>
      <IntroBlock data={mock.main.intro} />
      <Image
        alt={mock.main.image.alt}
        src={mock.main.image.src}
        className={styles.page__image}
      />
    </Body>
  );
};

export { MainPage };
