<template>
  <div class="rick-and-morty-episode-list">
      <CharacterEpisodeBlock :episode="episode" />
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
  async created () {
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

<style>
.rick-and-morty-episode-list {
  overflow-y: auto;
}
</style>
