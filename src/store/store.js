import Vue from'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Chine tin', price: 40},
            {name: 'Dubai Condit', price: 60},
            {name: 'Value park', price: 80}

        ]
    }
})