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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"SectionNumber":"mesh granular partnerships","SectionTitle":"evolve back-end vortals","Text":[{"type":"paragraph","text":"Nisi magna exercitation et deserunt consequat non Lorem aute fugiat fugiat dolor exercitation ullamco nostrud. Do in ad voluptate exercitation proident voluptate commodo ad cillum incididunt qui et est ea. Officia quis ad laboris id id proident labore consequat do Lorem Lorem ad consequat.","spans":[]}],"CtaTitle":"mesh scalable networks","CtaLink":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
