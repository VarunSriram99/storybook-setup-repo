import { create } from '@storybook/theming';
import logo from '../src/assets/icons/logo.svg'

export default create({
  base: 'light',
  brandTitle: 'Clearsense UI',
  brandImage: logo,

  barTextColor: 'rgb(139,195,255)',
  barBg: '#236da6',
  barSelectedColor: "white",

  appBg: 'white',
  appContentBg: '#f7f8fc',
});