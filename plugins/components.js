import Vue from "vue";

// import Page from '~/components/ContentType/Page.vue';

// Vue.component('page', Page);

// Base
import UseSvg from "~/components/Base/UseSvg.vue";

Vue.component("base-use-svg", UseSvg);

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

import StrateHero from "~/components/Strates/StrateHero.vue";
import StrateCatchPhrase from "~/components/Strates/StrateCatchPhrase.vue";

Vue.component("strate-hero", StrateHero);
Vue.component("strate-catchphrase", StrateCatchPhrase);

// COMPONENTS

// import Card from '~/components/Card';

// Vue.component('Card', Card);
