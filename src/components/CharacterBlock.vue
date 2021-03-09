<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
    <div
        class="card pointer"
        @click.prevent="detailedInfo"
    >
      <img :src="character.image" class="card-img-top" :alt="character.name">
      <div class="card-body">
        <h5 class="card-title"><strong>{{ character.name }}</strong></h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">species: <strong>{{ character.species }}</strong></li>
        <li class="list-group-item">gender: <strong>{{ character.gender }}</strong></li>
      </ul>
      <div class="card-body">
        <span class="card-link">
          More
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterBlock',
  props: {
    character: {
      type: Object,
      default () {
        return {};
      }
    },
  },
  methods: {
    detailedInfo () {
      const { id } = this.$route.params;
      if (!id) {
        this.$router.push({
          name: 'CharacterDetails',
          params: { id: this.character.id }
        });
      }
    }
  }
};
</script>

<style lang="stylus">
.card-link {
  cursor: pointer;

  &:hover {
    text-decoration underline
  }
}
</style>
