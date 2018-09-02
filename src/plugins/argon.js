import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.css";
import "../assets/scss/argon.scss";

import VueLazyload from "vue-lazyload";

import Badge from '../components/Badge';
import BaseAlert from '../components/BaseAlert';
import BaseButton from '../components/BaseButton';
import BaseCheckbox from '../components/BaseCheckbox';
import BaseInput from '../components/BaseInput';
import BasePagination from '../components/BasePagination';
import BaseProgress from '../components/BaseProgress';
import BaseRadio from '../components/BaseRadio';
import BaseSlider from '../components/BaseSlider';
import BaseSwitch from '../components/BaseSwitch';
import Card from '../components/Card';
import Icon from '../components/Icon';
import clickOutside from '../directives/click-ouside.js';

export default {
  install(Vue) {
    Vue.component('BadgeEl', Badge);
    Vue.component('AlertEl', BaseAlert);
    Vue.component('ButtonEl', BaseButton);
    Vue.component('InputEl', BaseInput);
    Vue.component('CheckboxEl', BaseCheckbox);
    Vue.component('PaginationEl', BasePagination);
    Vue.component('ProgressEl', BaseProgress);
    Vue.component('RadioEl', BaseRadio);
    Vue.component('SliderEl', BaseSlider);
    Vue.component('SwitchEl', BaseSwitch);
    Vue.component('CardEl', Card);
    Vue.component('IconEl', Icon);
    Vue.directive('ClickOutside', clickOutside);
    Vue.use(VueLazyload);
  },
};
