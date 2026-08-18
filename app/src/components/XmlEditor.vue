<template>
  <div :id="id" class="container my-5">

    <div class="card">
      <div class="card-body">

        <button type="button" class="btn btn-primary" @click="testWait(2000)">Wait 2 seconds</button>

      </div>
    </div>

  </div>
</template>

<script>
//import _ from 'lodash'
//import axios from 'axios'
//import Mixin2 from '../mixins/Mixin2'

export default {
  name: 'vue-xml-editor',
	//mixins: [ Mixin2 ],
  data: function () {
    return {
      id: null
    }
  },
  created: function () { this.id = this.$options.name + this._uid },
  methods: {
		wait: function (data) { this.$emit('wait', data); },
    testWait: function (duration) {
      this.wait(true);
      setTimeout(() => this.wait(false), duration);
    }
  }
};
</script>