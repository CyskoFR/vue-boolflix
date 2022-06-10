<template>
    <div class="movieCard">
        <h3>{{card.title}}</h3>
        <h5>Original Title: {{card.original_title}}</h5>
        <p><img :src="checkFlag(card.original_language) ? require(`../../assets/img/flags/${card.original_language}.png`) : require(`../../assets/img/flags/placeholder-flag-48.png`) " alt="flag"> {{card.original_language.toUpperCase()}}</p>
        <p>Vote: {{card.vote_average}}</p>
    </div>
</template>

<script>

export default {

    name: 'movieCard',

    data() {

        return {
            flagsAv: [
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
            return this.flagsAv.includes(lang);
        }
    }
    
}

</script>

<style lang="scss" scoped>

</style>
