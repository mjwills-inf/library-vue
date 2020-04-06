<template>
  <div class="delete-modal-container">
    <p>Are you sure you want to delete?</p>
    <button>Delete</button>
    <button>Cancel</button>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",
  props: ["bookItem"]
};
</script>

<style>
.delete-modal-container {  
  position: absolute;
  height: 100%;
  width: 100%;
  background: gold;
  padding: 10px;
  border-radius: 10px;
  z-index: 1;
}
</style>
