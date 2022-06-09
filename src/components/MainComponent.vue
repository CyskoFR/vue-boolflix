<template>
    <main class="container">
        <div class="row movie-container" v-for="movie in filteredMovies" :key="movie.id">
            <div class="movie-card">
                <h3>Title: {{movie.title}}</h3>
                <h5>Original Title: {{movie.original_title}}</h5>
                <p>Language: {{movie.original_language.toUpperCase()}}</p>
                <p>Vote: {{movie.vote_average}}</p>
            </div>
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
            sharedData,
        }
    },

    methods: {
        filterMovies() {

            const filteredMovies = [];

            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                api_key:'a47071b498cef0a1a6bae7d279b30e03',
                query: sharedData.searchText,
                language: 'it-IT',
                }

            }).then((response) => {
                // handle success
                filteredMovies.push(...response.data.results);

            }).catch(function (error) {
                // handle error
                console.log(error);
            });

            return filteredMovies
        }
    },

    computed: {
        filteredMovies() {

            return this.filterMovies()

        }
    }

}
</script>

<style lang="scss" scoped>

</style>