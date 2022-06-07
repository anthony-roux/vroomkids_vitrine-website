import Vue from "vue";

// import Page from '~/components/ContentType/Page.vue';
// Vue.component('page', Page);

// Base
import UseSvg from "~/components/Base/UseSvg.vue";
import BigLetter from "~/components/Base/BigLetter.vue";
import Testimonial from "~/components/Base/Testimonial.vue";
import TestimonialPro from "~/components/Base/TestimonialPro.vue";
import FAQItem from "~/components/Base/FAQItem.vue";

Vue.component("base-use-svg", UseSvg);
Vue.component("base-big-letter", BigLetter);
Vue.component("base-testimonial", Testimonial);
Vue.component("base-faq-item", FAQItem);
Vue.component("base-testimonial-pro", TestimonialPro);

// CORE

import Slider from "~/components/Core/Slider.vue";

Vue.component("core-slider", Slider);

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
import StrateCatchPhrase from "~/components/Strates/StrateCatchPhrase.vue";
import StrateBigTitle from "~/components/Strates/StrateBigTitle.vue";
import StrateAdvantages from "~/components/Strates/StrateAdvantages.vue";
import StrateReservations from "~/components/Strates/StrateReservations.vue";
import StrateGarantee from "~/components/Strates/StrateGarantee.vue";
import StrateTestimonials from "~/components/Strates/StrateTestimonials.vue";
import StrateManageRace from "~/components/Strates/StrateManageRace.vue";
import StrateCities from "~/components/Strates/StrateCities.vue";
import StrateText from "~/components/Strates/StrateText.vue";
import StrateFAQ from "~/components/Strates/StrateFAQ.vue";
import StrateTestimonialsPro from "~/components/Strates/StrateTestimonialsPro.vue";

Vue.component("strate-hero-home", StrateHeroHome);
Vue.component("strate-hero", StrateHero);
Vue.component("strate-catchphrase", StrateCatchPhrase);
Vue.component("strate-big-title", StrateBigTitle);
Vue.component("strate-advantages", StrateAdvantages);
Vue.component("strate-reservations", StrateReservations);
Vue.component("strate-garantee", StrateGarantee);
Vue.component("strate-testimonials", StrateTestimonials);
Vue.component("strate-manage-race", StrateManageRace);
Vue.component("strate-cities", StrateCities);
Vue.component("strate-text", StrateText);
Vue.component("strate-faq", StrateFAQ);
Vue.component("strate-testimonials-pro", StrateTestimonialsPro);

// COMPONENTS

// import Card from '~/components/Card';

// Vue.component('Card', Card);
