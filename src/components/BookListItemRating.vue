<template>
  <div class="rating-container">   
    <span class="active"></span>
    <span :class="{ active: bookItem.rating >= 2 }"></span>
    <span :class="{ active: bookItem.rating >= 3 }"></span>
    <span :class="{ active: bookItem.rating >= 4 }"></span>
    <span :class="{ active: bookItem.rating >= 5 }"></span>
  </div>
</template>

<script>
export default {
  name: "BookListItemRating",
  props: ["bookItem"],
  
};
</script>

<style scoped>
.rating-container {
  margin: 5px 3px 0px 0px;
}

span {
  margin: 2px;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  border: 1px solid white;
  display: inline-block;
}

.active {
  background-color: #a69926;
}
</style>
