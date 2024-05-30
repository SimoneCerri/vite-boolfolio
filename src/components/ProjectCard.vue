<script>
export default
  {
    name: 'ProjectCard',
    props:
      [
        'project',
      ],
  }
</script>

<template>
  <div class="col text-center">
    <div class="card">
      <div class="card-title">
        <!-- <span>{{ title }}</span> -->
        {{ project.title }}
      </div>
      <!-- <div class="card-body">
        Corpo
      </div>
      <div class="card-footer">
        Footer
      </div> -->
    </div>
  </div>
</template>

<style></style>
