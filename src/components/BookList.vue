<template>
  <div id="card-container">
    <div class="card" v-for="obj in bookData" v-bind:key="obj.id">
      <DeleteModal
        v-bind:bookItem="obj"
        v-on:delete-book="bookIdPayload => $emit('delete-book', bookIdPayload)"
      />
      <BookListItem v-bind:bookItem="obj" />
    </div>
  </div>
</template>

<script>
import BookListItem from "./BookListItem";
import DeleteModal from "./DeleteModal";

export default {
  name: "BookList",
  props: ["bookData"],
  components: {
    BookListItem,
    DeleteModal
  }
};
</script>

<style>
#card-container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 25px;
}
@media only screen and (max-width: 1350px) {
  #card-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 950px) {
  #card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 620px) {
  #card-container {
    display: grid;
    grid-template-columns: 1fr;
  }
}
.card {
  position: relative;
}
</style>
