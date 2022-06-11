<template>
    <div class="series-card">
        <div class="series-card_img">
            <img :src="card.poster_path ? `https://image.tmdb.org/t/p/w200/${card.poster_path}` : require(`../../assets/img/spallucce.png`)" :alt="`${card.original_title}.img`">
        </div>
        <div class="series-card_text">
            <h3>{{card.name}}</h3>
            <h5>Original Title: {{card.original_name}}</h5>
            <p class="language"><img :src="checkFlag(card.original_language) ? require(`../../assets/img/flags/${card.original_language}.png`) : require(`../../assets/img/flags/placeholder-flag-48.png`)" alt="flag.png"> {{card.original_language.toUpperCase()}}</p>
            <p class="vote">Vote: {{card.vote_average}}</p>
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
</template>

<script>

export default {

    name: 'serieCard',

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
            console.log(percentage)
            return percentage
        }

    }
    
}

</script>

<style lang="scss" scoped>

.series-card {
    display: inline-flex;
    width: 400px;
    height: 340px;
    background-color: lightgray;
    padding: 8px;
    margin: 10px;
    border-radius: 8px;

    .series-card_img {
        display: flex;
        margin-right: 8px;
        width: 50%;

        img {
            width: 100%;
        }

    }

    .series-card_text {
        width: 50%;

        h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 16px;
        }

        h5 {
            font-size: 1rem;
        }

        .language {
            font-size: .75rem;
        }

        img {
            height: 1.5rem;
        }

        .vote {
            font-size: .75rem;
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
        filter: drop-shadow(1px 1px 1px grey);
    }

    #empty-star {
        color: black;
    }

    #filled-star {
        color: gold;
    }

}

</style>
