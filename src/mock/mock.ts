import feature_1 from '../assets/images/icon_feature_1.svg';
import feature_2 from '../assets/images/icon_feature_2.svg';

import main from '../assets/images/img_main.png';
import Routes from '../constants/Routes';

export const mock = {
  main: {
    intro: {
      title: 'E-COURSE PLATFORM',
      quote: `Learning and teaching online, made easy.`,
      text: `Practice your English and learn new things with the our platform.`,
      features: [
        { name: 'Popular Words', count: 50, icon: feature_1 },
        { name: 'Mini-Game', count: 1, icon: feature_2 },
      ],
    },
    image: {
      src: main,
      alt: 'Gay with book',
    },
  },
  navigation: [
    { id: 1, name: 'main', link: Routes.main, needAccess: false },
    { id: 2, name: 'cards', link: Routes.cards, needAccess: false },
    { id: 3, name: 'profile', link: Routes.profile, needAccess: true },
  ],
};
