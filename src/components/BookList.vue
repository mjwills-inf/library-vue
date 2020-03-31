<template>
  <div>
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

<style></style>
