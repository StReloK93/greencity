import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            user: null,
            fullscreen: false,
            inspector: true,
            configurator: true,
            activeMesh: null,
            mesh: {
                active: null,
                info: null,
                images: null
            },
            drag: null,
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        async login({ dispatch }, data) {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/login', data)
            var result = await dispatch('getUser')
            if(result.status == 200) router.push({ name: 'territories' })
        },
        async register({ dispatch }, props) {
            const result = await axios.post('/api/register', props)
            if (result.status == 200) dispatch('login', props)
        },
        async getUser({ commit }) {
            const result = await axios.get('/api/user')
            commit('setUser', result.data)
            return result
        },
        async logout({commit}) {
            const data = await axios.get('/api/logout')
            if(data.status == 200){
                commit('setUser', null)
                router.push({ name: 'home' })
            } 
        }
    },
})
