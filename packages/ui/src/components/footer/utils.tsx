const FORBOLE_URL = 'https://www.jackalprotocol.com';
const BIG_DIPPER_URL = 'https://bigdipper.live';

export const donateLink = {
  key: 'donate',
  url: `${BIG_DIPPER_URL}/donation`,
};

export const footerLinks = [
  {
    key: 'jackalProtocol',
    links: [
      {
        key: 'website',
        url: FORBOLE_URL,
      },
      {
        key: 'blog',
        url: `${FORBOLE_URL}/blog`,
      },
    ],
  },
  {
    key: 'bigDipper',
    links: [
      {
        key: 'about',
        url: `${BIG_DIPPER_URL}/#about`,
      },
      {
        key: 'faq',
        url: `${BIG_DIPPER_URL}/faq`,
      },
      {
        key: 'termsAndConditions',
        url: `${BIG_DIPPER_URL}/terms-and-conditions`,
      },
      {
        key: 'privacyPolicy',
        url: `${BIG_DIPPER_URL}/privacy-policy`,
      },
      {
        key: 'documentation',
        url: 'https://docs.bigdipper.live/',
      },
    ],
  },
];
