<template>
  <div class="book-cover-container">
    <img
      v-if="this.foundCover === true"
      v-bind:src="`${this.url}`"
      class="cover-image"
    />
    <p v-else-if="this.isbnPresent === true" class="image-placeholder">
      Unable to locate cover with this ISBN
    </p>
    <p v-else class="image-placeholder">
      Please enter ISBN for cover image
    </p>
  </div>
</template>

<script>
export default {
  name: "BookListItemCover",
  props: ["bookItem"],
  methods: {
    async getCover() {
      let responseData = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.bookItem.isbn}`
      ).then(
        response => response.json(),
        reason => console.log(reason)
      );
      if (responseData.totalItems === 0) {
        console.log("No record");
        return;
      } else {
        this.foundCover = true;
        this.url = `${responseData.items[0].volumeInfo.imageLinks.smallThumbnail}`;
        console.log("found");
        this.bookItem.cover = this.url;
      }
    }
  },
  data() {
    return {
      isbnPresent: false,
      foundCover: false,
      url: ""
    };
  },
  created() {
    if (this.bookItem.cover === "" && this.bookItem.isbn !== "") {
      this.isbnPresent = true;
      this.getCover();
    }
  }
};
</script>

<style>
.book-cover-container {
  display: flex;
  flex-direction: row-reverse;
  padding-right: 10px;
  padding-top: 5px;
}

.cover-image {
  height: 125px;
  border-radius: 5px;
  filter: grayscale(50%);
}

.image-placeholder {
  font-size: 10px;
  text-align: center;
  height: 125px;
  width: 90px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgb(100,100,100);
  background-color: rgb(50, 50, 50);
}
</style>
