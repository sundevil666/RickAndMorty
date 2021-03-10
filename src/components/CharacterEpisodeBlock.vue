<template>
  <div
      class="card"
  >
    <div class="card-body">
      <h5 class="card-title"><strong>{{ episode.name }}</strong></h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">date: <strong>{{ episode.air_date }}</strong></li>
      <li class="list-group-item">episode: <strong>{{ episode.episode }}</strong></li>
    </ul>
    <div class="card-body__characters-in-episode">
      <ul class="list-group list-group-flush d-flex flex-row flex-wrap">
        <li
            v-for="character in characterInEpisodes"
            :key="character.id"
            class="list-group-item pointer col-6"
            @click.prevent="detailedInfoCharacter(character.id)"
        >
          <div><img :src="character.image" :alt="character.name" /></div>
          <div>character: <strong>{{ character.name }}</strong></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterEpisodeBlock',
  props: {
    episode: {
      type: Object,
      require: true,
      default () {
        return {}
      },
    },
  },
  computed: {
    characterInEpisodes () {
      return this.$store.getters['getCharactersInEpisode'];
    },
  },
  created () {
    const id = this.getCharactersInEpisode();
    id.forEach(item => {
      this.$store.dispatch('fetchCharactersInEpisode', item)
    })
  },
  methods: {
    getWidthUrlIdCharacters (str) {
      return str.map(item => {
        let idSplit = item.split('/')

        return +idSplit[idSplit.length - 1]
      })
    },
    getCharactersInEpisode () {
      if (this.episode.characters) {
        let urlEpisodeCharactersId = this.episode.characters;
        urlEpisodeCharactersId = this.getWidthUrlIdCharacters(urlEpisodeCharactersId)

        return urlEpisodeCharactersId
      }
    },
    detailedInfoCharacter (id) {
      this.$store.
      this.$router.push({
        name: 'CharacterDetails',
        params: { id: id }
      });
    },
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
