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
import SvgIcons from "~/components/Common/SvgIcons.vue";

Vue.component("c-header", Header);
Vue.component("c-sidebar", Sidebar);
Vue.component("c-nav-menu", Nav);
Vue.component("c-svg-icons", SvgIcons);

// STRATES

import StrateHero from '~/components/Strates/StrateHero.vue';

Vue.component('strate-hero', StrateHero);

// COMPONENTS

// import Card from '~/components/Card';

// Vue.component('Card', Card);
