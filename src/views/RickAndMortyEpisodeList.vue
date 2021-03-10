<template>
  <div class="rick-and-morty-episode-list">
      <CharacterEpisodeBlock :episode="episode" v-if="Object.keys(episode).length" />
  </div>
</template>

<script>
import CharacterEpisodeBlock from '@/components/CharacterEpisodeBlock';

export default {
  name: 'RickAndMortyEpisodeList',
  components: {
    CharacterEpisodeBlock,
  },
  data () {
    return {
      episode: {},
    };
  },
  async mounted () {
    try {
      const { id } = this.$route.params;

      if (id) {
        const { data } = await this.$store.dispatch('fetchEpisodeCharacter', id);
        this.episode = data;
      }
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style lang="stylus">
.rick-and-morty-episode-list {
  height: 100%;

  .card {
    height: 100%;
    display grid
    grid-template-columns 1fr
    grid-template-rows auto auto 1fr
  }
  .card-body__characters-in-episode {
    overflow-y auto
  }
}
</style>
