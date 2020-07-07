<template>
  <v-app>
    <TodosList/>
  </v-app>
</template>

<script>
import TodosList from './components/TodosList'

export default {
  name: 'App',

  components: {
    TodosList
  },

  data: () => ({
    //
  })
}
</script>
