<template>
  <div>[Cover TBD]</div>
</template>

<script>
export default {
  name: "BookListItemCover",
  props: ["bookItem"],
  methods: {},
  created() {
    const getCover = async () => {
      if (this.bookItem.cover === "") {
        console.log("created, cover = '' ");
        let data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.bookItem.isbn}`)
          .then(response=>response.json(), reason =>console.log(reason))
        console.log(data)
      }
    }
    
   getCover()
    // add url from API to books array
    // https://www.googleapis.com/books/v1/volumes?q=isbn:
  }
};
</script>

<style></style>
