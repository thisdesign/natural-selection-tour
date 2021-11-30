import MyComponent from '../../../../slices/RiderGallerySlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/RiderGallerySlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rider_gallery_slice","items":[{"Rider":{"link_type":"Web","url":"https://prismic.io"}},{"Rider":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"SectionNumber":"expedite clicks-and-mortar relationships","SectionTitle":"synthesize plug-and-play metrics"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
