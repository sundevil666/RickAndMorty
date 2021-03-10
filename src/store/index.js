import Vue from 'vue';
import Vuex from 'vuex';

import axiosInstance from '@/api/index';
import { CHARACTERS_BY_PAGE, CHARACTERS_BY_ID, CHARACTERS_BY_EPISODE } from '@/api/routes';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        characters: {},
        pages: 0,
        charactersInEpisode: [],
    },
    mutations: {
        setCharacters (state, { page, characters }) {
            Vue.set(state.characters, page, characters);
            // state.characters[page] = characters;
        },
        setPages(state, pages) {
            state.pages = pages
        },
        setCharacterInEpisode(state, character) {
            state.charactersInEpisode.push(character.data);
        },
        clearCharacterInEpisode(state) {
            state.charactersInEpisode = []
        },
    },
    actions: {
        fetchCharacter ({state, commit}, page) {
            const pageCharacters = state.characters[page]
            if(pageCharacters) {
                // return Promise.resolve(pageCharacters);
                return
            }
            axiosInstance.get(CHARACTERS_BY_PAGE(page))
                .then(({ data }) => {
                    const { info, results } = data;
                    commit('setCharacters', {page, characters: results})
                    commit('setPages', info.pages)
                })
                .catch(err => console.log('err', err));
        },
        fetchSingleCharacter(_, id) {
            return axiosInstance.get(CHARACTERS_BY_ID(id))
        },
        fetchEpisodeCharacter(_, id) {
            return axiosInstance.get(CHARACTERS_BY_EPISODE(id))
        },
        fetchCharactersInEpisode({commit }, id) {
            axiosInstance.get(CHARACTERS_BY_ID(id))
                .then(({ data }) => {
                    commit('setCharacterInEpisode', {data})
                })
                .catch(err => console.log('err', err))
        }
    },
    getters: {
        getCharacterById: (state) => ({id, page}) => {
            const pageCharacter = state.characters[page]
            if(pageCharacter) {
                return pageCharacter.find(characters => characters.id === id)
            }
            return null
        },
        getCharacterByPage: (state) => (page) => {
            return state.characters[page]
        },
        getCharactersInEpisode: state => {
            return state.charactersInEpisode
        },
    }
});
