<template>
  <div :id="id" class="container my-5">

    <div class="card">
      <div class="card-body">

        <div class="row">
          <div class="col-4">

            <div class="list-group">
              <template v-for="item in items">
                <button :key="item.id" type="button" class="list-group-item list-group-item-action" @click="selectItem(item)">{{ item.name }}</button>
              </template>
            </div>

          </div>
          <div v-if="selectedItem" class="col">

            <nav class="nav mb-2">
              <a class="nav-link" href="">Edit</a>
            </nav>
            
            <dl class="row">
              <template v-for="(value, key) in selectedItem">
                <dt :key="key" class="col-sm-3">{{ key }}</dt>
                <dd :key="key + '-value'" class="col-sm-9">{{ value }}</dd>
              </template>
            </dl>

          </div>
        </div>

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
  props: { testItems: { type: Array, default: () => [] } },
  data: function () {
    return {
      id: null,
      items: null,
      selectedItem: null
    }
  },
  created: function () {
    this.id = this.$options.name + this._uid;
    this.items = this.testItems;
  },
  methods: {
		selectItem: function (item) { this.selectedItem = item; },
		wait: function (data) { this.$emit('wait', data); }
  }
};
</script>