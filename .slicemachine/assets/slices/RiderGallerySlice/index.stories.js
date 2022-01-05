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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"rider_gallery_slice","items":[{"Rider":{"link_type":"Web","url":"https://prismic.io"}},{"Rider":{"link_type":"Web","url":"http://twitter.com"}},{"Rider":{"link_type":"Web","url":"https://slicemachine.dev"}},{"Rider":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"SectionNumber":"reinvent plug-and-play convergence","SectionTitle":"cultivate intuitive supply-chains"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
