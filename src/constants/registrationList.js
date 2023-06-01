import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

export const registrationList = [
  { href: '/sign-up', text: 'Sing up', isBtn: true, icon: null },
  {
    href: '/google-api',
    text: 'Continue with Google',
    isBtn: false,
    icon: FaGoogle,
  },
  {
    href: '/facebook-api',
    text: 'Continue with Facebook',
    isBtn: false,
    icon: FaFacebook,
  },
  { href: '/ios-api', text: 'Continue with IOS', isBtn: false, icon: FaApple },
  { href: '/login', text: 'Log in', isBtn: true, icon: null },
];
