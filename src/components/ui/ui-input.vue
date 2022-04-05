<template>
  <div class="ui-input">
    <label class="label" v-if="label">{{label}}</label>
    <input type="text" class="control" :value="modelValue" @input="onInput" :placeholder="placeholder">
  </div>
</template>

<script lang="ts">
import {Options, Vue, Prop} from "vue-property-decorator" 

@Options({
  name: 'ui-input'
})
export default class UiInputComponent extends Vue{
 @Prop({default: null}) modelValue: string;
 @Prop({default: null}) label: string;
 @Prop({default: ''}) placeholder: string;
 onInput(e: any) {
   this.$emit('update:modelValue', e.target.value)
 }
}
</script>

<style scoped>
  .ui-input {
    width: 100%;
  }
  .ui-input:not(:last-child) {
    margin-bottom: 10px;
  }
  .label{
    font-size: 14px;
    line-height: 16px;
  }
  .control {
    width: 100%;
    font-size: 14px;
    line-height: 16px;
    padding: 5px 5px;
    border: none;
    border-bottom: 2px solid #39b1fb;
    outline: none;
  }
</style>