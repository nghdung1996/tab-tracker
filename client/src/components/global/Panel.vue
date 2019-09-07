<template>
  <div>
    <div class="card border-info mb-3" style="">
      <div class="card-header">{{title}}</div>
      <div class="card-body">
        <slot>No data</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>

</style>
