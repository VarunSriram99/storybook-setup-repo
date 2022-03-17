import { create } from '@storybook/theming';
import logo from '../src/assets/icons/logo.svg'

export default create({
  base: 'light',
  brandTitle: 'Clearsense UI',
  brandImage: logo,

  barTextColor: 'white',
  barBg: 'rgb(30,148,252)',
  barSelectedColor: "white",

//   barTextColor: '#4A57C4',
//   barBg: '#E8F4FD',
//   barSelectedColor: "#4A57C4",

  appBg: 'white',
  appContentBg: 'white',
});