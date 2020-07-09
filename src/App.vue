<template>
  <v-app>
    <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    width="600"
  >
  <v-card-title>
      <v-icon
        large
        left
      >
        mdi-check
      </v-icon>
      <span class="title font-weight-light">ToDo's List</span>
    </v-card-title>
    <span class="float-right pr-3"><b>{{todos.length}}</b> Tasks</span>
  <AddTodo v-on:add-todo="addTodo"/>

  <Todos
  v-bind:todos="todos"
  v-on:delete-todo="deleteTodo"
  />

  </v-card>

  </v-app>
</template>

<script>
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

export default {
  name: 'App',
  components: { Todos, AddTodo },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    addTodo (newTodoObj) {
      this.todos.push(newTodoObj)
    },
    deleteTodo (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>
