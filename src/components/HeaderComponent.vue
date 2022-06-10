<template>
    <header>
        <div class="container d-flex justify-content-end py-2">
            <input id="input" class="mx-2" type="text" placeholder="Input title" v-model="search" @keyup.enter="inputSearch()"/>
            <button type="button" class="btn btn-outline-secondary" @click="inputSearch()">Search</button>
        </div>
    </header>
</template>

<script>

import sharedData from '../../src/shared/sharedData';

export default {

    name: 'HeaderComponent',

    data() {

        return {
            sharedData,
            search: '',
        };
        
    },

    methods: {

        inputSearch() {
            this.sharedData.searchText = this.search;
            this.search = '';
        }

    }

};

</script>

<style lang="scss" scoped>

</style>