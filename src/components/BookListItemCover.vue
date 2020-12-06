<template>
  <div>[Cover TBD]</div>
</template>

<script>
export default {
  name: "BookListItemCover",
  props: ["bookItem"],
  methods: {
    async getCover()  {    
      let responseData = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.bookItem.isbn}`)
        .then(response=>response.json(), reason =>console.log(reason))
      console.log(responseData)
      if (responseData.totalItems === 0) {
        console.log("No record")
        return
      } else {
        this.data.foundCover = true;
        this.data.url = `${responseData.items[0].volumeInfo.imageLinks.smallThumbnail}`
        console.log("found")
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

<style></style>
