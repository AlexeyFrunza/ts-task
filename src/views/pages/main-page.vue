<template>
  <div class="center-box">
    <ui-button @click="showAddForm">
      Add
    </ui-button>

    <ui-input v-model="searchValue" placeholder="Search for row..."/>
  </div>
<div style="width: 700px; margin: 0 auto;">
  <ui-table :table="filterTable" @remove="onRemove" @edit="onEdit"/>
</div>

<modal-window title="Add" v-model:visible="visibleAdd">
  <form action="">
    <ui-input label="Number" v-model="table.AddedRow.Number" />
    <ui-input label="Fullname" v-model="table.AddedRow.FullName" />
    <ui-input label="Post" v-model="table.AddedRow.Post" />
  </form>
  <template #footer>
    <ui-button @click="visibleAdd = false">Cancel</ui-button>
    <ui-button @click="add">Save</ui-button>
  </template>
</modal-window>

<modal-window title="Edit" v-model:visible="visibleEdit">
  <form action="">
    <ui-input label="Number" v-model="table.EditableRow.Number" />
    <ui-input label="Fullname" v-model="table.EditableRow.FullName" />
    <ui-input label="Post" v-model="table.EditableRow.Post" />
  </form>
  <template #footer>
    <ui-button @click="visibleEdit = false">Cancel</ui-button>
    <ui-button @click="edit">Save</ui-button>
  </template>
</modal-window>
  
</template>

<script lang="ts">
import {Options, Vue, Watch} from "vue-property-decorator" 
import UiButton from '@/components/ui/ui-button.vue'
import UiInput from '@/components/ui/ui-input.vue'
import UiTable from '@/components/ui/ui-table/ui-table.vue'
import HeaderItemModel from '@/components/ui/ui-table/models/header-item-model'
import TableModel from '@/components/ui/ui-table/models/table-model'
import EmployeeModel from '@/models/employee-model'

import ModalWindow from '@/components/ui/modal-window.vue'

@Options({
  name: 'main-page',
  components: {UiButton, UiInput, UiTable, ModalWindow}
})
export default class MainPageComponent extends Vue{
  searchValue: string = '';

  visibleAdd: boolean = false
  visibleEdit: boolean = false

  table: TableModel = new TableModel();

  get filterTable() {
    let table = new TableModel()
    table.Header = this.table.Header
    table.Content = this.table.Content.filter(row => (row as EmployeeModel).FullName.includes(this.searchValue))
    return table;
  }

  created() {
    this.initTable();

    console.log(this.table);
    
  }

  initTable() {
    this.table.Header.push(
      new HeaderItemModel('Number', 'Number'),
      new HeaderItemModel('Fullname', 'FullName'),
      new HeaderItemModel('Post', 'Post')
    )

    this.table.Content.push(
      new EmployeeModel(1,'Frunza Alexei','ssds'),
      new EmployeeModel(2,'Petrov Ivan','ssds'),
      new EmployeeModel(3,'Ivanov Alexander','ssds'),
      new EmployeeModel(4,'Steve Jobs','ssds'),
    )

    this.table.AddedRow = new EmployeeModel(null, null, null)
  }

  @Watch("visible")
  onVisible() {
    this.table.AddedRow = new EmployeeModel(null, null, null)
  }

  onRemove(row: object) {
    this.table.remove(row)
  }

  onEdit(row: object) {
    this.table.FlagEditableRow = row;
    this.table.EditableRow = Object.assign({}, row);

    this.visibleEdit = true;
  }

  add() {
    this.table.add(this.table.AddedRow);
    this.visibleAdd = false;
  }

  edit(){
    this.table.edit();
    this.visibleEdit = false
  }

  showAddForm() {
    this.visibleAdd = true;
  }
}
</script>

<style>
  .center-box {
    width: 40%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 60px;
    padding-top: 30px;
  }
</style>