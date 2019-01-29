<template>
  <div class="home">
    <a-menu>
      <a-menu-item>菜单项</a-menu-item>
      <a-sub-menu title="子菜单">
        <a-menu-item>子菜单项</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Home extends Vue {}
</script>
