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
  <div class="col-6 text-center py-3">
    <RouterLink :to="{ name: 'project', params: { id: project.id } }" class="text-decoration-none">
      <div class="card h-100">
        <div class="card-title bg-danger rounded-top mb-0">
          <span class="fw-bold fs-2">
            <strong>
              {{ project.title }}
            </strong>
          </span>
          <div class="card-subtitle d-flex m-0 pb-2" v-if="project.type">
            <div class="text-dark w-100">
              ~ {{ project.type.name }} ~
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <img width="100%" :src="project.img" alt="">
        </div>
        <div class="card-footer d-flex justify-content-evenly" v-if="project.technologies.length > 0">
          <div class="btn btn-dark text-danger" v-for="tech in project.technologies">
            {{ tech.name }}
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style></style>
