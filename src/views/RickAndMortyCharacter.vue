<template>
    <CharacterBlockDetails
        v-if="character"
        :character="character"
    />
</template>

<script>
import CharacterBlockDetails from '@/components/CharacterBlockDetails';
export default {
  name: 'RickAndMortyCharacter',
  components: {
    CharacterBlockDetails,
  },
  data() {
    return {
      character: null,
    }
  },
  async created () {
    try {
      const { id } = this.$route.params;

      if(id) {
        const {data} = await this.$store.dispatch('fetchSingleCharacter', id)
        this.character = data
      }
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style lang="stylus">
  .rick-and-morty-character {
    overflow-y auto
    height 100%
  }
</style>
