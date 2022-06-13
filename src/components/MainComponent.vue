<template>
    <main class="container py-3">
        <div class="movies-container mb-4">
            <h2 class="section-title mb-3">MOVIES:</h2>
            <movieCard :card="movie" :genres="moviesGenre" v-for="movie in movies" :key="movie.id"/>
        </div>
        <div class="series-container">
            <h2 class="section-title mb-3">SERIES:</h2>
            <serieCard :card="serie" :genres="seriesGenre" v-for="serie in series" :key="serie.id"/>
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
            moviesGenre: [],
            seriesGenre: [],
        }

    },

    components: {

        movieCard,
        serieCard,

    },
    
    watch: {

        'sharedData.searchText': function(){
            //API movies
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

            //API series
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

            //API movies genre
            axios.get('https://api.themoviedb.org/3/genre/movie/list', {
                params: {
                api_key:'a47071b498cef0a1a6bae7d279b30e03',
                language: 'it-IT',
                }
            }).then((response) => {
                // handle success
                this.moviesGenre = response.data.genres;
            }).catch(function (error) {
                // handle error
                console.log(error);
            });

            //API series genre
            axios.get('https://api.themoviedb.org/3/genre/tv/list', {
                params: {
                api_key:'a47071b498cef0a1a6bae7d279b30e03',
                language: 'it-IT',
                }
            }).then((response) => {
                // handle success
                this.seriesGenre = response.data.genres;
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
        background-color: rgba(0, 0, 0, 0.95);
    }

    .movies-container, .series-container {
        width: 100%;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;

        .section-title {
            width: 100%;
            color: white;
        }

    }

</style>