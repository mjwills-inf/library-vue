<template>
  <div class="modal-background">
    <div class="modal-container">
      <div class="input-form">
        <form>
          <label for="title">Title:</label>
          <br />
          <input
            id="title"
            class="entry"
            name="title"
            type="text"
            placeholder="Enter Book Title"
          />
          <br />
          <label for="author">Author:</label>
          <br />
          <input
            id="author"
            class="entry"
            name="author"
            type="text"
            placeholder="Enter Author"
          />
          <br />
          <label for="pages">Pages:</label>
          <br />
          <input
            id="pages"
            class="entry"
            name="pages"
            type="number"
            placeholder="Number Of Pages"
          />
          <br />
          <label for="year">Year:</label>
          <br />
          <input
            id="year"
            class="entry"
            name="year"
            type="number"
            placeholder="Year Published"
          />
          <br />
          <label for="read">Read:</label>
          <input id="read" name="read" type="checkbox" />
          <br />
          <input id="submit" type="button" name="submit" value="Submit" />
          <br />
          <button
            v-on:click="$emit('close-modal')"
            id="cancel"
            type="button"
            name="cancel"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputModal"
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  z-index: 1;
  padding-top: 200px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
