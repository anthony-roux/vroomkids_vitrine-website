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
import NavBar from "~/components/Common/Nav.vue";
import SvgIcons from "~/components/Common/SvgIcons.vue";

Vue.component("c-nav-bar", NavBar);
Vue.component("c-svg-icons", SvgIcons);

// STRATES

import StrateHeader from '~/components/Strates/StrateHeader.vue';

Vue.component('strate-header', StrateHeader);

// COMPONENTS

// import Card from '~/components/Card';

// Vue.component('Card', Card);
