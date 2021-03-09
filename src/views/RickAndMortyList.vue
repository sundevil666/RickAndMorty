<template>
  <div class="rick-and-morty-list">
    <div class="row">
      <CharacterBlock
          v-for="character in characters"
          :key="character.id"
          :character="character"
      />
    </div>
    <Paginate
        v-if="pages"
        v-model="currentPage"
        :page-count="pages"
        :click-handler="functionName"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination pagination-md mt-3'"
        :page-class="'page-item'"
        :page-link-class="'page-link'"
        :prev-class="'page-item'"
        :next-class="'page-item'"
        :prev-link-class="'page-link'"
        :next-link-class="'page-link'"
    />
  </div>
</template>

<script>
import CharacterBlock from '@/components/CharacterBlock';

const Paginate = () => import('vuejs-paginate');

export default {
  name: 'RickAndMortyList',
  components: {
    CharacterBlock,
    Paginate,
  },
  data () {
    return {
      currentPage: 1
    };
  },
  computed: {
    characters () {
      return this.$store.getters['getCharacterByPage'](this.currentPage);
    },
    pages () {
      return this.$store.state.pages;
    }
  },
  watch: {
    currentPage: {
      handler (page) {
        this.$store.dispatch('fetchCharacter', page);
      },
      immediate: true,
    }
  },
  methods: {
    functionName (pageNum) {
      console.log('pageNum', pageNum);
    }
  }
};
</script>

<style>
  .rick-and-morty-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    height: 100%;
  }
  .rick-and-morty-list .row {
    overflow-y: auto;
  }
</style>
