<template>
  <div class="modal-background">
    <div class="modal-container">
      <div class="input-form">
        <form v-on:submit.prevent>
          <label for="title">Title:</label>
          <input
            v-model="titleInput"
            id="title-input"
            name="title"
            type="text"
            placeholder="Enter Book Title"
          />
          <label for="author">Author:</label>
          <input
            v-model="authorInput"
            id="author-input"
            name="author"
            type="text"
            placeholder="Enter Author"
          />
          <label for="year-input">Year:</label>
          <input
            v-model="yearInput"
            id="year-input"
            name="year-input"
            type="number"
            placeholder="Year Published"
          />
          <label for="isbn-input">ISBN:</label>
          <input
            v-model="isbnInput"
            id="isbn-input"
            name="isbn-input"
            type="text"
            placeholder="ISBN number"
          />

          <button v-on:click="editConfirmed" id="edit" name="edit">
            Edit
          </button>
          <button v-on:click="$emit('close-edit')" id="cancel" name="cancel">
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookEditModal",
  props: ["targetEdit"],
  data() {
    return {
      titleInput: this.targetEdit.title,
      authorInput: this.targetEdit.author,
      yearInput: this.targetEdit.year,
      isbnInput: this.targetEdit.isbn
    };
  },
  methods: {
    editConfirmed() {
      const editedBook = {
        id: this.targetEdit.id,
        title: this.titleInput,
        author: this.authorInput,
        year: this.yearInput,
        rating: this.targetEdit.rating,
        read: this.targetEdit.read,
        isbn: this.isbnInput,
        cover: "",
        hideDelete: true
      };
      this.$emit("edit-confirm", editedBook);
      this.$emit("close-edit");
    }
  }
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  z-index: 2;
  padding-top: 200px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-container {
  margin: auto;
  padding: 25px;
  color: rgb(228, 228, 228);
  background-color: rgba(43, 43, 43, 0.9);
  width: fit-content;
  border-radius: 8px;
}

label {
  font-weight: 600;
  display: inline-block;
}

label[name="read"],
label[name="rating"] {
  height: 35px;
  line-height: 35px;
  white-space: nowrap;
}

input {
  margin: 5px 0px 10px 0px;
  display: block;
  border-radius: 6px;
  height: 30px;
  width: 250px;
  outline: none;
  font-size: 0.9em;
}
button {
  margin: 10px 0px;
  display: block;
  border-radius: 6px;
  border: 2px solid rgb(228, 228, 228);
  color: rgb(228, 228, 228);
  font-weight: 600;
  height: 35px;
  width: 250px;
  outline: none;
  font-size: 0.9em;
  background: none;
  transition-duration: 0.3s;
  cursor: pointer;
}

button:hover {
  background: rgb(228, 228, 228);
  color: rgb(40, 40, 40);
}

button[name="edit"] {
  border: 2px solid #26a69a;
  color: #26a69a;
}
button[name="edit"]:hover {
  border: 1px solid #26a69a;
  background-color: #26a69a;
  color: rgb(40, 40, 40);
}
</style>
