export default {
    state:{
        name:localStorage.getItem("name")|| null,
        dni:localStorage.getItem("dni")|| null,
        donante:localStorage.getItem("donante")|| 0,
        fecha:localStorage.getItem("fecha")|| null,
        frutas:localStorage.getItem("frutas")|| null,
    },
    getters:{
        name(state){
            return state.name;
        },
        dni(state){
            return state.dni;
        },
        donante(state){
            return state.donante;
        },
        fecha(state){
            return state.fecha;
        },

        frutas(state){
            return state.frutas;
        },
       
    },
    mutations:{ 
        SET_name(state,name){
            state.name = name;
            localStorage.setItem("name", name);
        },

        SET_dni(state,dni){
            state.dni = dni;
            localStorage.setItem("dni",dni);

        },

        SET_donante(state, donante){
            state.donante = donante;
            localStorage.setItem("donante",donante);

        },

        SET_fecha(state,fecha){
            state.fecha = fecha;
            localStorage.setItem("fecha",fecha);

        },

        SET_frutas(state,frutas){
            state.frutas=frutas;
            localStorage.setItem("frutas",frutas);

        }
    },
    actions:{
        name({commit},name){
            commit('SET_name',name);
        },
        dni({commit},dni){
            commit('SET_dni',dni);
        },
        donante({commit},donante){
            commit('SET_donante',donante);
        },
        fecha({commit},fecha){
            commit('SET_fecha',fecha);
        },

        frutas({commit},frutas){
            commit('SET_frutas',frutas);
        }
    }
    }