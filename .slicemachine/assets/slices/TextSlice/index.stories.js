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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"SectionNumber":"synthesize best-of-breed e-markets","SectionTitle":"facilitate 24/365 e-tailers","Text":[{"type":"paragraph","text":"Do occaecat dolore mollit consectetur labore labore do. Nostrud ut exercitation ullamco irure est amet ex minim reprehenderit cupidatat et laborum consequat.","spans":[]}],"CtaTitle":"utilize dot-com deliverables","CtaLink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
