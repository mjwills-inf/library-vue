<template>
  <div class="button-container">
    <div>
      <button v-if="bookItem.read === true" class="read-button">Read</button>
      <button v-else class="unread-button">Unread</button>
    </div>
    <div class="edit-del-buttons">
      <button class="edit-button">v</button>
      <button class="del-button">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookListItemButtons",
  props: ["bookItem"]
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
</style>
