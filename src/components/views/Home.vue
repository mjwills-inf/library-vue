<template>
  <div class="home">
    <div v-if="showModal" class="modal-container">
      <InputModal
        v-on:close-modal="showModal = false"
        v-on:new-book="addBook"
      />
    </div>
    <div id="page-titles">
      <img
        id="vue-logo"
        alt="Vue logo"
        src="../../assets/img/logo.png"
        width="100px"
      />
      <h1>Library. <span>Dark.</span></h1>
      <h3>The Odin Project</h3>
      <h3>Front-End Framework Project: Vue Library</h3>
    </div>
    <div id="page-functions">
      <button v-on:click="showModal = true">Add New Book</button>
    </div>
    <div id="page-cards">
      <BookList v-on:delete-book="deleteBook" v-bind:bookData="books" />
    </div>
  </div>
</template>

<script>
//////////////////////////////////////////////////////////////////////////////////////-->
import BookList from "../BookList";
import InputModal from "../InputModal";

export default {
  name: "Home",
  components: {
    BookList,
    InputModal
  },
  data() {
    return {
      showModal: false,
      books: [
        {
          id: 1,
          title: "The Bible",
          author: "Those guys et al",
          year: 1611,
          rating: 0,
          read: false,
          isbn: 9780007259762,
          cover: "",
          hideDelete: true
        },
        {
          id: 2,
          title: "Crime and Punishment",
          author: "Fyodor Dostoevsky",
          year: 1866,
          rating: 3,
          read: true,
          isbn: 9780140449136,
          cover: "",
          hideDelete: true
        },
        {
          id: 3,
          title: "The Silmarillion",
          author: "J.R.R Tolkien",
          year: 1977,
          rating: 4,
          read: true,
          isbn: 9788845272400,
          cover: "",
          hideDelete: true
        }
      ]
    };
  },
  methods: {
    addUrl(id, url) {
      console.log(id, url);
    },
    addBook(newBook) {
      this.books.push(newBook);
    },
    deleteBook(bookItemIdPayload) {
      this.books = this.books.filter(item => item.id != bookItemIdPayload);
    }
  }
};
</script>

<style scoped>
#vue-logo {
  margin: 30px 60px 20px;
  float: right;
}

h1 {
  font-weight: 400;
  font-size: 4em;
  color: rgb(220, 220, 220);
  padding: 28px;
}

h1 span {
  color: rgb(0, 0, 0);
}

h3 {
  font-weight: 400;
  font-size: 1.2em;
  padding-left: 30px;
  color: rgb(220, 220, 220);
  margin-bottom: 3px;
}

#page-functions {
  margin: 30px;
}

#page-functions button {
  cursor: pointer;
  padding: 7px;
  outline: none;
  color: rgb(228, 228, 228);
  font-weight: 550;
  font-size: 15px;
  text-shadow: 1px 1px #1f272b;
  border: 1px solid #1c252b;
  border-radius: 6px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(3%, rgb(82, 82, 82)),
    color-stop(4%, #414141),
    color-stop(100%, rgb(49, 49, 49))
  );
}

#page-functions button:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(3%, rgb(100, 100, 100)),
    color-stop(4%, rgb(90, 90, 90)),
    color-stop(100%, rgb(64, 64, 64))
  );
}
#page-functions button:active {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(3%, rgb(32, 32, 32)),
    color-stop(51%, rgb(51, 51, 51)),
    color-stop(100%, rgb(46, 46, 46))
  );
}
@media only screen and (max-width: 455px) {
  #vue-logo {
    float: left;
  }
}
</style>
