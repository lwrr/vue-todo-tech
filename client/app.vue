<template>
  <div id="app">
    <div id="cover"></div>
    <p>{{count}}</p>
    <p>{{textA}}</p>
    <p>{{fullName}}</p>
    <p>{{fullNameA}}</p>
    <Header></Header>
    <!-- <todo></todo> -->
    <router-link to="/app/123">app1</router-link>
    <router-link to="/app/456">app2</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  data () {
    return {
      text: 1
    }
  },
  components: {
    Header,
    Footer
  },
  mounted () {
    // let i = 0
    // setInterval(() => {
    //   this.updateCount({ num: i++, num2: 111 })
    // }, 1000)
    setTimeout(() => {
      this.updateCountAsync({
        num: 5,
        time: 2000
      })
    }, 1000)
    // this['a/updateCountA'](123)
    // console.log(this['a/fullNameA'])
    // this['a/fullNameA']
    // this['a/updateCountAsyncA']()
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
      textA: (state) => state.a.count
    }),
    ...mapGetters({
      'fullName': 'fullName',
      'fullNameA': 'a/fullNameA'})
  },
  methods: {
    ...mapMutations(['updateCount', 'a/updateCountA']),
    ...mapActions(['updateCountAsync', 'a/updateCountAsyncA'])
  }

}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


