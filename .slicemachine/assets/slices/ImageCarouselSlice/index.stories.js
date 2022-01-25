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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_carousel_slice","items":[{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading1","text":"Enhance intuitive deliverables","spans":[]}],"Description":[{"type":"paragraph","text":"Eu officia fugiat in non.","spans":[]}]},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading1","text":"Expedite B2B systems","spans":[]}],"Description":[{"type":"paragraph","text":"Sunt laborum ad sit magna nisi laboris laborum ipsum occaecat mollit reprehenderit. Est enim officia adipisicing non id cillum commodo excepteur voluptate dolor.","spans":[]}]},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading1","text":"Mesh dot-com technologies","spans":[]}],"Description":[{"type":"paragraph","text":"Esse tempor laboris fugiat. Eu consequat adipisicing nisi velit occaecat qui amet ut non laborum. Irure in amet do laborum proident laboris ea ea mollit consequat nostrud laboris id labore.","spans":[]}]}],"primary":{"SectionTitle":"revolutionize holistic convergence","SectionNumber":"target bleeding-edge models"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
