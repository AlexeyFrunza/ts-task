<template>
  <div class="modal-window" @click="hide" v-if="visible">
    <div class="form-box" @click.stop>
      <div class="header">
        <div class="title">{{title}}</div>
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

export default class ModalWindowComponent extends Vue {
@Prop({default: null}) title: string;
@Prop({default: false}) visible: string;

hide() {
  this.$emit('update:visible', false);
}
}
</script>

<style scoped>
.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-box {
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  width: 50%;
}
.form-box .header {
  padding-bottom: 10px;
}
.form-box .footer {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}
.form {
  
}
</style>