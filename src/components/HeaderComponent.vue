<template>
    <header>
        <div class="container d-flex justify-content-end py-2">
            <input class="mx-2" type="text" placeholder="Input title" v-model="sharedData.searchText"/>
            <button type="button" class="btn btn-outline-secondary">Search</button>
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
        };
    }

};

</script>

<style lang="scss" scoped>

</style>