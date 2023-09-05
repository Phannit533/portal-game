<template>
  <div>
    <h1>Profile</h1>
    <p>Name: {{ user.user_name }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
};
</script>

