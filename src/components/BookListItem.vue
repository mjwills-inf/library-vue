<template>
  <div>
    {{ bookItem.title }}
  </div>
</template>

<script>
export default {
  name: "BookListItem",
  props: ["bookItem"]
};
</script>

<style scoped></style>
