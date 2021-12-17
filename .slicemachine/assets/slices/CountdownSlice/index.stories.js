import MyComponent from '../../../../slices/CountdownSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CountdownSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"countdown_slice","items":[],"primary":{"SectionNumber":"envisioneer front-end content","SectionTitle":"synthesize mission-critical interfaces","title":[{"type":"heading1","text":"Monetize proactive web-readiness","spans":[]}],"TargetDate":"2016-03-07T05:13:43.591Z","CtaTitle":"redefine magnetic e-commerce","CtaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"FooterContent":[{"type":"paragraph","text":"Est minim irure culpa amet dolor nisi ut sint ullamco commodo aliqua consectetur cupidatat irure laborum. Laboris ipsum sint sit enim dolor aliquip amet magna culpa id laboris enim est laboris. Nulla velit ut excepteur velit veniam nulla incididunt commodo minim in enim cillum eu.","spans":[]}],"SidebarSectionNumber":"facilitate 24/7 channels","SidebarSectionTitle":"disintermediate turn-key synergies","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Pariatur Lorem sit Lorem proident proident sit do aliquip mollit ipsum aute nisi eiusmod. Velit enim ut est.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
