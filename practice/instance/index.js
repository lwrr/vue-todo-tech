import Vue from 'vue'

const ChildComp = {
  template: `
    <div :style="style">
      {{data.value}}
      <slot name="header" :aaa="aaa" bbb="bbb"></slot>
      <slot name="body"></slot>
    </div>
  `,
  inject: ['yeye', 'data'],
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid red'

      },
      aaa: 111
    }
  },
  mounted () {
    console.log(this.yeye, this.data.value)
  }
}

const ParentComp = {
  name: 'Parent',
  components: {
    ChildComp: ChildComp
  },
  template: `
    <child-comp></child-comp>
  `
}
var app = new Vue({//eslint-disable-line
  el: '#root',
  components: {
    CompOne: ParentComp
  },
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      data
    }
  },
  template: `
  <div>
  <input type="text" v-model="value"/>
     <comp-one ref="comp">
      <p ref="ppp" slot="header" slot-scope="props">this is header {{props.aaa}} - {{props.bbb}} </p>
      <p slot="body">this is body </p>
     </comp-one> 
  </div>
  `,
  /* render (createElement) {

  } */
  data: {
    aaa: 123,
    value: 'hahahahaha'
  },
  mounted () {
    console.log(this.$refs.comp, this.$refs.ppp)
  }
})
