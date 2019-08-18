var app = new Vue({
  el: '#app',
  data: {
    newTodo: null,
    todos: []
  },
  mounted() {
    this.todos = localStorage.todos ? JSON.parse(localStorage.todos) : []
  },
  methods: {
    store(e, description) {
      if (e.which == 13) {
        this.todos.push({
          description: description,
          finished: false,
          edit: false
        })
        localStorage.todos = JSON.stringify(this.todos)
        this.newTodo = null
      }
    },

    edit(todo) {
      todo.edit = true
    },

    update(e, todo) {
      if (e.which == 13) {
        const index = this.todos.indexOf(todo)
        todo.edit = false
        this.todos[index] = todo
        localStorage.todos = JSON.stringify(this.todos)
      }
    },

    finishe(todo) {
      const index = this.todos.indexOf(todo)
      todo.finished = !todo.finished
      this.todos[index] = todo
      localStorage.todos = JSON.stringify(this.todos)
    },

    cancelUpdate(todo) {
      todo.edit = false
    },

    remove(todo) {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
      localStorage.todos = JSON.stringify(this.todos)
    }
  }
})