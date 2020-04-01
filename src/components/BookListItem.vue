<template>
  <div class="book-card">
    <div class="book-card-left">
      <h3>{{ bookItem.title }}</h3>
      <h4>{{ bookItem.author }}</h4>
      <p>Year: {{ bookItem.year }}</p>
      <p>{{ bookItem.rating }}</p>
    </div>
    <div class="book-card-right">
      Cover
      <BookListItemCover v-bind:bookItem="bookItem" />
    </div>
    <div class="book-card-bottom">
      <BookListItemButtons v-bind:bookItem="bookItem" />
    </div>
  </div>
</template>

<script>
import BookListItemButtons from "./BookListItemButtons";
import BookListItemCover from "./BookListItemCover";
export default {
  name: "BookListItem",
  props: ["bookItem"],
  components: {
    BookListItemButtons,
    BookListItemCover
  }
};
</script>

<style scoped>
.book-card {
  position: relative;
  text-align: left;
  margin: 8px;
  padding: 10px;
  border-radius: 12px;
  color: rgb(228, 228, 228);
  background-color: rgba(43, 43, 43, 1);
  border-color: rgba(250, 250, 250, 0.2);
  box-shadow: 7px 7px 16px rgb(0, 0, 0, 1), -7px -7px 16px rgba(50, 50, 50, 1);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  min-height: 175px;
}

.book-card-bottom {
  grid-column: 1 /3;
}
</style>
