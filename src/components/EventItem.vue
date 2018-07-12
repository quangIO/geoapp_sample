<template>
  <div>
    <vs-chip v-if="event['type']==='PICK_UP'" vs-icon="info" vs-color="primary">Picked up Lorem from Quis Autem</vs-chip>
    <vs-chip v-else-if="event['type']==='NEW_ORDER'" vs-icon="add_shopping_cart" vs-color="warning">New Order from Voluptatem Accusantium</vs-chip>
    <vs-chip v-else-if="event['type']==='DONE'" vs-icon="done" vs-color="success">Package ipsum dolor delivered</vs-chip>
  </div>
</template>

<script>
export default {
  name: "event-item",
  props: {
    event: Object
  }
};
</script>

<style scoped>
</style>
