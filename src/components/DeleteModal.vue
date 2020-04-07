<template>
  <div
    v-bind:class="{ hidden: bookItem.hideDelete }"
    class="delete-modal-container"
  >
    <p class="del-modal-p">Are you sure you want to delete?</p>
    <button @click="$emit('delete-book', bookItem.id)" class="del-modal-delete">
      Delete
    </button>
    <button @click="bookItem.hideDelete = true" class="del-modal-cancel">
      Cancel
    </button>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",
  props: ["bookItem"]
};
</script>

<style>
.delete-modal-container {
  visibility: visible;
  opacity: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(43, 43, 43, 1);
  color: rgb(228, 228, 228);
  padding: 10px;
  border-radius: 10px;
  z-index: 1;
  transition: opacity 500ms, visibility 500ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hidden {
  visibility: hidden;
  opacity: 0;
}
.del-modal-p {
  font-weight: 600;
  margin-bottom: 15px;
}
.del-modal-delete {
  margin: 10px 10px;
  border-radius: 6px;

  height: 30px;
  outline: none;
  font-size: 0.9em;
  background: none;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #a62633;
  border-color: #a62633;
}
.del-modal-cancel {
  margin: 10px 10px;
  border-radius: 6px;
  background: rgb(228, 228, 228);
  color: rgb(40, 40, 40);
  font-weight: 400;
  height: 30px;
  outline: none;
  font-size: 0.9em;
  transition-duration: 0.4s;
  cursor: pointer;
}
</style>
