import MyComponent from '../../../../slices/FaqSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FaqSlice'
}


export const _Default = () => ({
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Officia irure dolor labore voluptate duis excepteur eu nisi anim.","spans":[]}],"answer":[{"type":"paragraph","text":"Minim duis elit sunt quis id in magna labore laboris in do.","spans":[]}]}],"primary":{"sectionTitle":"stairs","sectionNumber":"wash"},"id":"_Default","slice_type":"faq_slice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
