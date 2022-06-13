<template>
    <main class="onload-component container">
        <div class="trend-movies-container">
            <trendingMovieCard :card="trendingMovie" v-for="trendingMovie in trendingMovies" :key="trendingMovie.id"></trendingMovieCard>
        </div>
    </main>
</template>

<script>

import axios from 'axios';
import trendingMovieCard from './microComponents/trendingMovieCard.vue';

export default {

    name: 'OnLoadMain',

    data() {

        return {
            trendingMovies: [],
        }

    },

    components: {

        trendingMovieCard,

    },
    

    created() {
        axios.get('https://api.themoviedb.org/3/trending/movie/week', {
            params: {
            api_key:'a47071b498cef0a1a6bae7d279b30e03',
            }
        }).then((response) => {
            // handle success
            this.trendingMovies = response.data.results;
        }).catch(function (error) {
            // handle error
            console.log(error);
        });
    }

}
</script>

<style lang="scss" scoped>

    main {
        display: flex;
        align-items: center;
        min-height: calc(100vh - 80px);
        background-color: rgba(0, 0, 0, 0.95);
        overflow: auto;
    }

    .trend-movies-container {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 0 10px;
        padding-bottom: 90px;
    }

</style>