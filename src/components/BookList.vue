<template>
  <div id="card-container">
    <div v-for="index in bookData" v-bind:key="index.id">
      <BookListItem v-bind:bookItem="index" />
    </div>
  </div>
</template>

<script>
import BookListItem from "./BookListItem";

export default {
  name: "BookList",
  props: ["bookData"],
  components: {
    BookListItem
  }
};
</script>

<style>
#card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 25px;
}
@media only screen and (max-width: 1100px) {
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
</style>
