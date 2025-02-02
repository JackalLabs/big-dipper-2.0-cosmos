import { ReactNode } from 'react';
import { GithubIcon, LinkedinIcon, TelegramIcon, TwitterIcon } from '@/components/icons';

export const socialMediaLinks: {
  component: ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/jackal_tg',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/Jackal_Protocol',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/JackalLabs',
  },
];
