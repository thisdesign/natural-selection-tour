import MyComponent from '../../../../slices/ImageCarouselSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageCarouselSlice'
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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{"Image":{"dimensions":{"width":3024,"height":3778},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a"},"Video":{"link_type":"Web","url":"http://google.com"},"Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading1","text":"Before","spans":[]}],"Description":[{"type":"paragraph","text":"Amet mollit culpa culpa aute occaecat ut ad ipsum occaecat eiusmod.","spans":[]}]}],"primary":{"SectionTitle":"cream","SectionNumber":"easy"},"id":"_DefaultSlice","slice_type":"image_carousel_slice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''
