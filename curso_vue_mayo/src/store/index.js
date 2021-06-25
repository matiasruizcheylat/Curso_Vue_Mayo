import Vuex from 'vuex'
import Vue from 'vue'


//import ciudades from './modules/ciudades'
import valFormularioF from './modules/valFormularioF'
Vue.use(Vuex)

const store = new Vuex.Store({

    modules:{
        //ciudades,
        valFormularioF
    }
})

export default store;