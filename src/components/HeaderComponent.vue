<template>
    <header>
        <div class="header-component container d-flex justify-content-between">
            <img class="logo" src="../assets/img/boolflix-extended-logo.png" alt="boolflix-extended-logo.png">
            <img class="logo-mobile" src="../assets/img/boolflix-logo.png" alt="boolflix-logo.png" onClick="window.location.reload()">
            <div class="input-field d-flex">
                <input id="input" type="text" placeholder="Search here..." spellcheck="false" v-model="search" @keyup.enter="inputSearch(); sharedData.showMain = true"/>
                <button type="button" class="search-button btn btn-outline-secondary" @click="inputSearch(); sharedData.showMain = true">Go</button>
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
    background-image: url(../assets/img/Netflix_Header.jpg);
    background-size: cover;
    height: 80px;
    border: 6px solid #322a2a;

    .container {
        height: 100%;
        padding: 10px 6px;

        img {
            height: 100%;
            filter: drop-shadow(2px 2px white);
        }

        .input-field {

            input {
                border-radius: 8px;
                font-size: 20px;
                margin: 5px;
                box-shadow: inset 0 0 20px rgba(255, 166, 170, 0);
                outline: 1px solid;
                outline-color: rgba(255, 166, 170, .5);
            }

            button {
                margin: 5px;
                color: #dc1a28;
                background-color: white;
                box-shadow: inset 0 0 20px rgba(255, 166, 170, 0);
                outline: 1px solid;
                outline-color: rgba(255, 166, 170, .5);
                transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
                text-shadow: 1px 1px 2px grey;
            }

            button:hover {
                color: white;
                outline-color: rgba(255, 166, 170, 0);
                outline-offset: 8px;
                text-shadow: 1px 1px 2px #427388; 
                background-color: #dc1a28;
            }

            .home-button {
                display: flex;
                align-items: center;
                margin: 8px;
            }

        }

    }
    
}

@media (min-width: 576px) {
    .logo-mobile { 
        display: none !important;
    }
}

@media screen and (max-width: 576px) {
    input {
        width: 100%;
    }

    .logo {
        display: none !important;
    }

    button {
        display: none !important;
    }
}

</style>