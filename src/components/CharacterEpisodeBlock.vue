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
    <ul class="list-group list-group-flush row flex-row">
      <li
          v-for="character in getEpisodeCharacters()"
          :key="character"
          class="list-group-item pointer col-6"
      >
        character: <strong>{{ character }}</strong>
      </li>
    </ul>
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
  methods: {
    getEpisodeCharacters () {
      let episodeCharactersId = this.episode.characters;
      let i = 0
      i++
      console.log(i);
      if(episodeCharactersId) {
        episodeCharactersId = episodeCharactersId.map(item => {
          let id = item.split('/')
          return +id[id.length - 1]
        })
      }

      console.log('episodeCharactersId', episodeCharactersId);
      // return episodeCharactersId
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
