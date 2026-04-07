import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

Vue.component('vue-overlay-spinner', require('./components/OverlaySpinner.vue').default);
Vue.component('vue-xml-editor', require('./components/XmlEditor.vue').default);

new Vue({
  render: h => h(App)
}).$mount('#app')