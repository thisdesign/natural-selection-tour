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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"SectionNumber":"e-enable next-generation systems","SectionTitle":"integrate synergistic solutions","Text":[{"type":"paragraph","text":"Aliquip ipsum esse mollit qui id ea ut sint eu excepteur officia aliquip. Consectetur quis qui dolor id cillum nulla sit pariatur. Cupidatat eiusmod irure qui dolore ut officia.","spans":[]}],"CtaTitle":"optimize dot-com vortals","CtaLink":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
