<template>
  <div class="book-cover-container">
    <img 
      v-if="this.foundCover === true" 
      v-bind:src="`${this.url}`" 
      class="cover-image"
    />
  </div>
</template>

<script>
export default {
  name: "BookListItemCover",
  props: ["bookItem"],
  methods: {
    async getCover()  {    
      let responseData = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.bookItem.isbn}`)
        .then(response=>response.json(), reason =>console.log(reason))
      if (responseData.totalItems === 0) {
        console.log("No record")
        return
      } else {
        this.foundCover = true;
        this.url = `${responseData.items[0].volumeInfo.imageLinks.smallThumbnail}`
        console.log("found")
        console.log("foundCover=", this.foundCover)
        console.log("url", this.url)
      }      
    }
  },
  data() {
    return {
      isbnPresent: false,
      foundCover: false,
      url: ""
    }
  },
  created() {    
      if (this.bookItem.cover === "") {
        console.log("call getCover")
        this.getCover();
      }    
    // add url from API to books array
    // https://www.googleapis.com/books/v1/volumes?q=isbn:
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
  max-height: 125px;
  border-radius: 5px;
  filter: grayscale(50%);
}
</style>
