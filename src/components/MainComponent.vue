<template>
    <main class="container">
        <div class="movie-container" v-for="movie in movies" :key="movie.id">
            <h3>Title: {{movie.title}}</h3>
            <h5>Original Title: {{movie.original_title}}</h5>
            <p>Language: {{movie.original_language.toUpperCase()}}</p>
            <p>Vote: {{movie.vote_average}}</p>
        </div>
    </main>
</template>

<script>

import axios from 'axios';
import sharedData from '../../src/shared/sharedData';

export default {

    name: 'MainComponent',
    props: {
    },

    data() {
        return {
            movies: [],
            sharedData,
        }
    },

    methods: {
        searchQuery() {

            const filteredMovies = [];

            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                api_key:'a47071b498cef0a1a6bae7d279b30e03',
                query: sharedData.searchText,
                language: 'it-IT',
                adult: 'false',
                }
            }).then((response) => {
                // handle success
                filteredMovies.push(...response.data.results);

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