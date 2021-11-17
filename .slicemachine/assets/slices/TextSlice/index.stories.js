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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"Text":[{"type":"paragraph","text":"A new generation of outdoor events, media, and experiences designed to inspire a deeper connection to Mother Nature, where the World’s greatest snowboarders compete on our planet’s most challenging natural(ly enhanced) terrain. ","spans":[]}],"SectionNumber":"01","SectionTitle":"Section","CtaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"CtaTitle":"Explore More"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
