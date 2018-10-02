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
    },
    getters: {
        saleProducts: state => {
            var saleProducts= state.products.map(product => {
                return {
                  name:'**' + product.name + '**',
                  price: product.price/2
                }
              });
              return saleProducts;
        }
    },
    mutations: {
        reducePrice: (state,payLoad) => {
            state.products.forEach( product => {
                product.price-= payLoad;
            })
        }

    },
    actions: {
        reducePrice: (context, payLoad) => {
            setTimeout(function(){
                context.commit('reducePrice',payLoad)
            },2000) 
        }
    }
})