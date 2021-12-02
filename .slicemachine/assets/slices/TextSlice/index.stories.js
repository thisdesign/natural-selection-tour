import MyComponent from '../../../../slices/TextSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"SectionNumber":"enhance scalable functionalities","SectionTitle":"expedite holistic schemas","Text":[{"type":"paragraph","text":"Amet ex sint do laboris occaecat mollit eiusmod qui voluptate anim adipisicing minim magna commodo. Excepteur sint ullamco exercitation labore reprehenderit.","spans":[]}],"CtaTitle":"utilize cross-media mindshare","CtaLink":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
