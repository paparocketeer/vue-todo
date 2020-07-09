<template>
  <v-list-item class="pointer">
    <v-list-item-action>
      <v-checkbox v-model="todo.completed" color="primary"></v-checkbox>
    </v-list-item-action>
    <v-list-item-content v-on:click="toggleCompleted">
      <v-list-item-title v-bind:class="{ 'completed': todo.completed }">{{ todo.text }}</v-list-item-title>
    </v-list-item-content>
    <v-btn icon ripple color="red" v-if="todo.completed" @click="$emit('delete-todo', todo.id)">
      <v-icon class="white--text">close</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    toggleCompleted () {
      this.todo.completed = !this.todo.completed
    }
  }
}
</script>

<style>
.pointer{
  cursor: pointer;
}
.completed{
  text-decoration: line-through;
}
</style>
