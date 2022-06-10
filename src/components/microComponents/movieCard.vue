<template>
    <div class="movieCard">
        <h3>Title: {{card.title}}</h3>
        <h5>Original Title: {{card.original_title}}</h5>
        <p><img src="" alt="flag"> Language: {{card.original_language.toUpperCase()}}</p>
        <p>Vote: {{card.vote_average}}</p>
    </div>
</template>

<script>
export default {

    name: 'movieCard',

    data() {
        return {
            flags: [],
        }
    },

    props: {
        card: Object,
    }
    
}

</script>

<style>

</style>
