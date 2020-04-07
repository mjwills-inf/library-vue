<template>
  <div class="book-card">
    <div class="book-card-left">
      <h3>{{ bookItem.title }}</h3>
      <h4>{{ bookItem.author }}</h4>
      <p>Year: {{ bookItem.year }}</p>
      <BookListItemRating v-bind:bookItem="bookItem" />
    </div>
    <div class="book-card-right">
      <BookListItemCover v-bind:bookItem="bookItem" />
    </div>
    <div class="book-card-bottom">
      <BookListItemButtons
        v-on:delete-book="$emit('delete-book', bookItem.id)"
        v-bind:bookItem="bookItem"
      />
    </div>
  </div>
</template>

<script>
import BookListItemButtons from "./BookListItemButtons";
import BookListItemCover from "./BookListItemCover";
import BookListItemRating from "./BookListItemRating";
export default {
  name: "BookListItem",
  props: ["bookItem"],
  components: {
    BookListItemButtons,
    BookListItemCover,
    BookListItemRating
  }
};
</script>

<style scoped>
h3 {
  padding: 5px 0px 3px 3px;
}
h4 {
  font-style: italic;
  line-height: 1.2;
  padding: 3px 0px 5px 3px;
}
p {
  padding: 5px 0px 0px 3px;
}
.rating-display {
  padding: 10px 0px 0px 10px;
}

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
  grid-template-columns: 5fr 3fr;
  gap: 20px;
}

.book-card-left {
  min-height: 139px;
}

.book-card-bottom {
  grid-column: 1 /3;
}
</style>
