<template>
  <div class="button-container">
    <div>
      <button
        v-if="bookItem.read === true"
        class="read-button"
        v-on:click="toggleRead"
      >
        Read
      </button>
      <button v-else class="unread-button" v-on:click="toggleRead">
        Unread
      </button>
    </div>
    <div class="edit-del-buttons">
      <button v-on:click="editBook" class="edit-button">Edit</button>
      <button v-on:click="deleteBook" class="del-button">
        X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookListItemButtons",
  props: ["bookItem"],
  methods: {
    toggleRead() {
      this.bookItem.read = !this.bookItem.read;
    },
    editBook() {
      console.log(`edit ${this.bookItem.id}`);
      this.$emit("edit-book", this.bookItem.id);
    },
    deleteBook() {
      this.bookItem.hideDelete = false;
    }
  }
};
</script>

<style scoped>
.button-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.edit-del-buttons {
  display: flex;
  justify-content: flex-end;
}

button {
  margin: 10px 10px;
  display: block;
  border-radius: 6px;
  border: 1px solid rgb(228, 228, 228);
  color: rgb(228, 228, 228);
  font-weight: 400;
  height: 25px;
  outline: none;
  font-size: 0.9em;
  background: none;
  transition-duration: 0.4s;
  cursor: pointer;
}

button:hover {
  background: rgb(228, 228, 228);
  color: rgb(40, 40, 40);
}

.del-button {
  color: #a62633;
  border: 1px solid #a62633;
}
.del-button:hover {
  background-color: #a62633;
  border-color: #a62633;
}

.read-button {
  background-color: #26a69a;
  border: 1px solid #26a69a;
  color: rgb(40, 40, 40);
}
.read-button:hover {
  border: 1px solid rgb(228, 228, 228);
}

.unread-button:hover {
  background-color: #26a69a;
  border: 1px solid #26a69a;
}
</style>
