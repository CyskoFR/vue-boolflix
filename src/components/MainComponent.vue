<template>
    <main class="container">
        <div class="row movie-container" v-for="movie in movies" :key="movie.id">
            <movieCard :card="movie"/>
        </div>
    </main>
</template>

<script>

import axios from 'axios';
import sharedData from '../../src/shared/sharedData';
import movieCard from './microComponents/movieCard.vue';

export default {

    name: 'MainComponent',

    data() {

        return {
            sharedData,
            movies: [],
        }

    },

    components: {

        movieCard,

    },
    
    watch: {

        'sharedData.searchText': function(){
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                api_key:'a47071b498cef0a1a6bae7d279b30e03',
                query: sharedData.searchText,
                language: 'it-IT',
                }

            }).then((response) => {
                // handle success
                this.movies = response.data.results;
            }).catch(function (error) {
                // handle error
                console.log(error);
            });
        }

    },

}

</script>

<style lang="scss" scoped>

</style>