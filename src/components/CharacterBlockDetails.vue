<template>
  <div class="row character-block-details">
    <div class="col-12 col-md-6">
      <div class="card">
        <img :src="character.image" class="card-img-top" :alt="character.name">
        <div class="card-body">
          <h5 class="card-title"><strong>{{ character.name }}</strong></h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">species: <strong>{{ character.species }}</strong></li>
          <li class="list-group-item">gender: <strong>{{ character.gender }}</strong></li>
        </ul>
        <div class="card-body">
          <span
              class="card-link"
              @click.prevent="detailedInfo"
          >
            More
          </span>
        </div>
      </div>
      <button class="btn btn-warning mt-3" @click="goBack">go back</button>
    </div>
    <div class="col-12 col-md-6">
      <div class="description-character">
        <ul class="list-group list-group-flush mb-4">
          <li class="list-group-item">origin name: <strong>{{ character.origin.name }}</strong></li>
          <li class="list-group-item">location name: <strong>{{ character.location.name }}</strong></li>
          <li class="list-group-item">gender: <strong>{{ character.gender }}</strong></li>
        </ul>
        <ul class="list-group list-group-flush flex flex-wrap flex-row">
          <li class="list-group-item w-100"><strong>Episode</strong></li>
          <li
              v-for="episode in characterEpisode"
              :key="episode"
              class="list-group-item pointer w-50 flex-row"
              @click="goEpisode(episode)"
          >
            episode: <strong>{{ episode }}</strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterBlockDetails',
  props: {
    character: {
      type: Object,
      default () {
        return {};
      }
    },
  },
  data () {
    return {
      characterEpisode: [],
    };
  },
  mounted () {
    this.characterEpisode = this.character.episode.map(item => {
      const episode = item.split('/')
      return episode[episode.length - 1]
    });
  },
  methods: {
    goBack () {
      this.$router.push({ name: 'RickAndMortyList' });
    },
    goEpisode (id) {
      this.$router.push({
        name: 'RickAndMortyEpisodeList',
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
  .character-block-details {
    height 100%
    > div {
      height 100%
      overflow-y auto
    }
  }
</style>
