<template>
    <div class="trending-movie-card">
        <div class="movie-card_img">
            <img :src="card.poster_path ? `https://image.tmdb.org/t/p/w300/${card.poster_path}` : require(`../../assets/img/spallucce.png`)" :alt="`${card.original_title}.img`">
        </div>
        <Transition>
            <div class="movie-card_overlay">
                <div class="movie-card_text">
                    <div class="movie-info_box">
                        <h5 class="title">{{card.title}}</h5>
                        <div class="original-title">(<img class="flag-img" :src="checkFlag(card.original_language) ? require(`../../assets/img/flags/${card.original_language}.png`) : require(`../../assets/img/flags/placeholder-flag-48.png`)" alt="flag.png">{{card.original_language.toUpperCase()}}: {{card.original_title}} )</div>
                        <div class="movie-description">{{card.overview}}</div>
                    </div>
                    <div class="movie-rating_box">
                        <p class="vote">Rating: {{card.vote_average}} out of {{card.vote_count}} votes</p>
                        <div class="star-box">
                            <div class="empty-stars_box">
                                <div class="empty-stars" v-for="i in 5" :key="i"><i id="empty-star" class="fa-regular fa-star"></i></div>
                            </div>
                            <div class="filled-stars_box" :style="{'width':getFilledStarsPerc(card.vote_average)}">
                                <div class="filled-stars" v-for="i in 5" :key="i"><i id="filled-star" class="fa-solid fa-star"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
export default {

    name: 'trendingMovieCard',

    data() {
        return {
            flagsIso: [
            'br',
            'cn',
            'de',
            'en',
            'es',
            'fr',
            'it',
            'ja',
            'ko',
            'ru',
            'us'
            ],
        }
    },

    props: {
        card: Object,
    },

    methods: {

        checkFlag(lang) {
            return this.flagsIso.includes(lang);
        },

        getFilledStarsPerc(voteNumber) {
            let percentage = (`${voteNumber*10}%`);
            return percentage
        },
        
    }

}
</script>

<style lang="scss" scoped>

.trending-movie-card {
    position: relative;
    display: flex;
    padding: 1px;
    margin: 10px;
    border-radius: 8px;
    background: white;
    cursor: pointer;
}

.movie-card_img {
    img {
        border-radius: 8px;
    }
}

.movie-card_overlay{
    position: absolute;
    word-wrap: break-word;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 12px;
    opacity: 0;
    transition: 0.2s;
}

.movie-card_overlay:hover {
    transition: 0.5s;
    opacity: 1;
}

.movie-card_text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    padding: 18px 0;
    word-wrap: break-word;
    color: white;
    z-index: 1;
    text-shadow: 1px 1px 2px black;
    height: 100%;
}

.original-title {
    font-size: .875rem;
    margin-bottom: 8px;

    .flag-img {
    height: 1.2rem;
    margin: 0 2px;
    margin-bottom: 2px;
    }
}

.movie-description {
    font-size: 0.75rem;
}

.vote {
    font-size: .75rem;
    margin: 0;
}

.star-box {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 16px;

    .empty-stars_box, .filled-stars_box {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
    }

    .filled-stars_box {
        overflow: hidden;
        z-index: 1;
    }

}

#empty-star, #filled-star {
    filter: drop-shadow(1px 1px 1px black);
    color: rgb(255, 221, 0);
}

</style>