<template>
    <header>
        <div class="container d-flex justify-content-between">
            <img src="../assets/img/netflix-extended-logo.png" alt="netflix-extended-logo.png">
            <div class="input-field d-flex">
                <input id="input" type="text" placeholder="Input title" spellcheck="false" v-model="search" @keyup.enter="inputSearch()"/>
                <button type="button" class="search-button btn btn-outline-secondary" @click="inputSearch()">Search</button>
                <button type="button" class="home-button btn btn-outline-secondary" onClick="window.location.reload()"><i class="fa-solid fa-house-chimney"></i></button>
            </div>
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

header {
    display: flex;
    align-items: center;
    background-color: #33363a;
    height: 80px;

    .container {
        height: 100%;
        padding: 14px 6px;

        img {
            height: 100%;
        }

        .input-field {

            input {
                border-radius: 8px;
                font-size: 22px;
            }

            button {
                margin-left: 8px;
            }

            .home-button {
                margin: 8px 0;
                margin-left: 18px;
            }

        }

    }
    
}

</style>