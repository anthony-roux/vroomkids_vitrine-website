import Vue from "vue";

// import Page from '~/components/ContentType/Page.vue';

// Vue.component('page', Page);

// Base
import UseSvg from "~/components/Base/UseSvg.vue";
import BigLetter from "~/components/Base/BigLetter.vue";

Vue.component("base-use-svg", UseSvg);
Vue.component("base-big-letter", BigLetter);

// CORE

// import Exemple from '~/components/Core/exemple';

// Vue.component('core-exemple', Exemple);

// COMMON (layout, Header, footer etc..)

import Header from "~/components/Common/Header.vue";
import Nav from "~/components/Common/Nav.vue";
import Sidebar from "~/components/Common/Sidebar.vue";
import Footer from "~/components/Common/Footer.vue";
import SvgIcons from "~/components/Common/SvgIcons.vue";

Vue.component("c-header", Header);
Vue.component("c-sidebar", Sidebar);
Vue.component("c-nav-menu", Nav);
Vue.component("c-footer", Footer);
Vue.component("c-svg-icons", SvgIcons);

// STRATES

import StrateHeroHome from "~/components/Strates/StrateHeroHome.vue";
import StrateHero from "~/components/Strates/StrateHero.vue";
import StrateBigTitle from "~/components/Strates/StrateBigTitle.vue";

Vue.component("strate-hero-home", StrateHeroHome);
Vue.component("strate-hero", StrateHero);
Vue.component("strate-big-title", StrateBigTitle);

// COMPONENTS

// import Card from '~/components/Card';

// Vue.component('Card', Card);
