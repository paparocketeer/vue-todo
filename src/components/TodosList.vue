<template>
  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
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

  </v-card>
</template>

<script>
export default {
  name: 'TodosList',

  data: () => ({
    todos: [
      {
        text: 'Learning Vue',
        completed: false
      },
      {
        text: 'Learning Nuxt',
        completed: false
      },
      {
        text: 'Learning Cockpit',
        completed: true
      },
      {
        text: 'Learning Butter',
        completed: false
      },
      {
        text: 'Learning Laravel',
        completed: false
      }
    ]
  }),
  methods: {
    toggleCompleted (item) {

    }
  }
}
</script>
