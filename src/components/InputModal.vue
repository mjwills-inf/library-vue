<template>
  <div class="modal-background">
    <div class="modal-container">
      <div class="input-form">
        <form>
          <label for="title">Title:</label>
          <input
            id="title-input"
            name="title"
            type="text"
            placeholder="Enter Book Title"
          />
          <label for="author">Author:</label>
          <input
            id="author-input"
            name="author"
            type="text"
            placeholder="Enter Author"
          />
          <label for="year-input">Year:</label>
          <input
            id="year-input"
            name="year-input"
            type="number"
            placeholder="Year Published"
          />
          <label for="isbn-input">ISBN:</label>
          <input
            id="isbn-input"
            name="isbn-input"
            type="text"
            placeholder="ISBN number"
          />
          <div class="read-rating-container">
            <div class="read-label-input">
              <label for="read-input">Read: </label>
              <input id="read-input" name="read-input" type="checkbox" />
            </div>
            <div class="rating-label-input">
              <label for="rating-input">Rating:</label>
              <select id="rating-input" name="rating-input" type="select">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <button id="submit" name="submit">Submit</button>
          <button v-on:click="$emit('close-modal')" id="cancel" name="cancel">
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

input[type="checkbox"] {
  width: 30px;
  border-radius: 2px;
  height: 30px;
  display: inline-block;
  margin: 5px 5px 5px 20px;
}

select {
  height: 30px;
  width: 60px;
  border-radius: 2px;
  margin: 5px 0px 5px 10px;
  font-size: 0.9rem;
}

.read-rating-container {
  display: flex;
  justify-content: space-between;
}
.read-label-input {
  display: flex;
  align-items: center;
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
}

button:hover {
  background: rgb(228, 228, 228);
  color: rgb(40, 40, 40);
}

button[name="submit"] {
  border: 2px solid #26a69a;
  color: #26a69a;
}
button[name="submit"]:hover {
  border: 1px solid #26a69a;
  background-color: #26a69a;
  color: rgb(40, 40, 40);
}
</style>
