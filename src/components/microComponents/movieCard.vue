<template>
    <div class="movie-card" >
        <div class="movie-card_bg" :style="card.backdrop_path ? {'background-image': `url(https://image.tmdb.org/t/p/w500/${card.backdrop_path})`} : {'background-image': `url(https://image.tmdb.org/t/p/w500/${card.poster_path})`}"></div>
        <div class="movie-card_img">
            <img :src="card.poster_path ? `https://image.tmdb.org/t/p/w342/${card.poster_path}` : require(`../../assets/img/spallucce.png`)" :alt="`${card.original_title}.img`">
        </div>
        <div class="movie-card_text">
            <div class="movie-info_box">
                <h3 class="title">{{card.title}}</h3>
                <div class="original-title">(<img class="flag-img" :src="checkFlag(card.original_language) ? require(`../../assets/img/flags/${card.original_language}.png`) : require(`../../assets/img/flags/placeholder-flag-48.png`)" alt="flag.png">{{card.original_language.toUpperCase()}}: {{card.original_title}} )</div>
                <div class="genre" v-for="genre in getGenre(card.genre_ids, genres)" :key="genre">{{genre}}</div>
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
</template>

<script>

export default {

    name: 'movieCard',

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
        genres: Array,
    },

    methods: {

        checkFlag(lang) {
            return this.flagsIso.includes(lang);
        },

        getFilledStarsPerc(voteNumber) {
            let percentage = (`${voteNumber*10}%`);
            return percentage
        },

        getGenre(cardGenreIdsArray, genresArrayOfObjs) {
            let genresArray = [];
            // cicle through 1st argument(array) getting every element
            cardGenreIdsArray.forEach(elm => {
                // cicle through 2nd argument(array of objects) getting every object
                for (let i = 0; i < genresArrayOfObjs.length; i++) {
                    // check if element matches object key(ID)
                    if(elm == genresArrayOfObjs[i].id) {
                        // if match is true, push key(name) in array
                        genresArray.push(genresArrayOfObjs[i].name)
                    }
                }
            });
            return genresArray
        },
        
    }
}

</script>

<style lang="scss" scoped>

.movie-card {
    position: relative;
    display: inline-flex;
    width: 400px;
    height: 340px;
    padding: 8px;
    margin: 10px;
    border-radius: 8px;
    cursor: pointer;
    background: rgb(177, 177, 177);


    .movie-card_bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        filter: blur(4px);
        background-color: #00000070;
        background-blend-mode: multiply;
    }

    .movie-card_img {
        display: flex;
        padding: 16px 10px;
        width: 45%;
        z-index: 1;

        img {
            width: 100%;
            border-radius: 6px;
        }

    }

    .movie-card_text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;
        overflow-y: auto;
        padding: 18px 0;
        word-wrap: break-word;
        color: white;
        z-index: 1;
        text-shadow: 1px 1px 2px black;

        .title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 12px;
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

        .vote {
            font-size: .75rem;
            margin: 0;
        }

        .genre {
            font-size: .625rem;
            display: inline-flex;
            margin: 3px;
            background-color: #c10e1aea;
            padding: 4px 8px;
            border-radius: 8px;
            box-shadow: 1px 1px 1px rgb(80, 79, 79);
        }

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

}

.movie-card:hover {
    transition: 0.2s;
    transform: scale(104%);
    .movie-card_bg {
        transition: 0.3s;
        filter: none;
    }
}

</style>
