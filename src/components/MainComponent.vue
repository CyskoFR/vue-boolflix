<template>
    <main class="container py-3">
        <div class="movies-container mb-4">
            <h2>MOVIES:</h2>
            <movieCard :card="movie" v-for="movie in movies" :key="movie.id"/>
        </div>
        <div class="series-container mb-4">
            <h2>SERIES:</h2>
            <serieCard :card="serie" v-for="serie in series" :key="serie.id"/>
        </div>
    </main>
</template>

<script>

import axios from 'axios';
import sharedData from '../../src/shared/sharedData';
import movieCard from './microComponents/movieCard.vue';
import serieCard from './microComponents/serieCard.vue';

export default {

    name: 'MainComponent',

    data() {

        return {
            sharedData,
            movies: [],
            series: [],
        }

    },

    components: {

        movieCard,
        serieCard,

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

            axios.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                api_key:'a47071b498cef0a1a6bae7d279b30e03',
                query: sharedData.searchText,
                language: 'it-IT',
                }

            }).then((response) => {
                // handle success
                this.series = response.data.results;
            }).catch(function (error) {
                // handle error
                console.log(error);
            });

        }

    },

}

</script>

<style lang="scss" scoped>

    main {
        display: flex;
        flex-wrap: wrap;
        min-height: calc(100vh - 80px);
    }

    .movies-container, .series-container {
        width: 100%;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;

        h2 {
            width: 100%;
        }

    }

</style>