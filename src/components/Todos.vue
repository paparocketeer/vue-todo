<template>
<div>
    <Todo
        v-for="(todo, index) in todos"
        :todo="todo"
        :key="index"
        v-on:delete-todo="$emit('delete-todo', todo.id)"/>
</div>

</template>

<script>
import Todo from './Todo'

export default {
  name: 'Todos',
  props: ['todos'],
  components: {
    Todo
  }
}
</script>
