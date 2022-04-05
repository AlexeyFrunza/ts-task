<template>
  <div class="ui-table">
    <div class="row header">
      <div class="cell" v-for="(cell, index) in table.Header" :key="index">
        {{cell.Title}}
      </div>
      <div class="cell">
      </div>
      <div class="cell">
      </div>
    </div>

    <div class="row" v-for="(row, index) in table.Content" :key="index">
      <div class="cell" v-for="(cell, index) in table.Header" :key="index">
        {{row[cell.Field]}}
      </div>

      <div class="cell action" @click="removeRow(row)">
        <img src="~@/assets/images/delete.png" class="icon-img" alt="">
      </div>
      <div class="cell action" @click="editRow(row)">
        <img src="~@/assets/images/edit.png" class="icon-img" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue, Prop} from "vue-property-decorator"
import TableModel from '@/components/ui/ui-table/ui-table.vue'

@Options({
  name: 'ui-table'
})
export default class UiTableComponent extends Vue{
  @Prop() table: TableModel;
  removeRow(row: Object) {
    this.$emit('remove', row)
  }
  editRow(row: Object) {
    this.$emit('edit', row)
  }
}
</script>

<style scoped>
.ui-table {
  border-spacing: 1px;
  display: table;
  width: 100%;
}
.row.header .cell{
  background-color: #39b1fb;
}
.row {
  display: table-row;
}
.cell {
  color: white;
  padding: 5px 5px;
  background-color: #72c9ff;
  display: table-cell;
}
.icon-img {
  cursor: pointer;
  width: 20px;
  height: 20px;
  filter: invert();
}
.cell.action {
  text-align: center;
}
</style>