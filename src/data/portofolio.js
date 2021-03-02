//motion apk
import onboarding from '../assets/motion/onboarding.jpg';
import home from '../assets/motion/home.jpg';
import linkbook from '../assets/motion/linkbook.jpg';
import chat from '../assets/motion/chat.jpg';
import moment from '../assets/motion/moment.jpg';
//perpus
import homePerpus from '../assets/web/home.png';
import dataBuku from '../assets/web/dataBuku.png';
import peminjaman from '../assets/web/peminjaman.png';

export const portofolioData = [
    {
      thumbnail: onboarding,
      title: 'Motion APK',
      subTitile: 'mhdjanuar',
      cols: 2,
      slides: [
        {
          image: onboarding,
        },
        {
          image: home,
        },
        {
          image: linkbook,
        },
        {
          image: chat,
        },
        {
          image: moment,
        },
      ]
    },
    {
      thumbnail: homePerpus,
      title: 'Perpustakaan',
      subTitile: 'mhdjanuar',
      cols: 4,
      slides: [
        {
          image: homePerpus,
        },
        {
          image: dataBuku,
        },
        {
          image: peminjaman,
        },
      ]
    },
  ]