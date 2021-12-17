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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"SectionNumber":"e-enable real-time action-items","SectionTitle":"synergize revolutionary web services","Text":[{"type":"paragraph","text":"Ea et labore minim laboris quis deserunt dolore nulla duis Lorem ut tempor amet laboris. Tempor dolor id in fugiat adipisicing et sunt.","spans":[]}],"CtaTitle":"leverage user-centric relationships","CtaLink":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
