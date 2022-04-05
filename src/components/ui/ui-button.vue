<template>
  <button class="ui-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {Options, Vue} from "vue-property-decorator" 

@Options({
  name: 'ui-button'
})
export default class UiButtonComponent extends Vue{

}
</script>

<style scoped>
  .ui-button {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    padding: 10px 16px;
    background: #39b1fb;
    border: 1px solid #39b1fb;
    border-radius: 4px;
    color: white;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .ui-button:hover {
    background: #56bdfd;
  }
  .ui-button:active {
    background: #fff;
    color:#39b1fb;
    border: 1px solid rgb(234, 234, 234)
  }
</style>