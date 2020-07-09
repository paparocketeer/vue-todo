<template>
  <div>
    <form @submit="addTodo">
    <v-text-field
    class="pr-5 pl-5"
      v-model="text"
      label="What needs to be done?"
    ></v-text-field>
    </form>

  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'AddTodo',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    addTodo (e) {
      e.preventDefault()
      if (!this.text) {
        return
      }
      const newTodoObj = {
        id: uuidv4(),
        text: this.text,
        completed: false
      }
      this.$emit('add-todo', newTodoObj)
      this.text = ''
    }
  }
}
</script>
<style scoped>
</style>
