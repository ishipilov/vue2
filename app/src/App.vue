<template>
  <div>
    <vue-overlay-spinner :active="waiting"/>
    <vue-xml-editor @wait="wait"/>
  </div>
</template>

<script>
import OvarlaySpinner from './components/OverlaySpinner.vue';
import XmlEditor from './components/XmlEditor.vue';
export default {
  components: { OvarlaySpinner, XmlEditor },
  data() {
    return {
      waiting: false
    }
  },
  methods: {
		wait: function (data) { this.waiting = data }
  }
}
</script>