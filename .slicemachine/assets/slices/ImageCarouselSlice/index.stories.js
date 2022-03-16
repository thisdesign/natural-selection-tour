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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_carousel_slice","items":[{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"Video":{"link_type":"Web","url":"https://slicemachine.dev"},"Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading1","text":"Unleash back-end convergence","spans":[]}],"Description":[{"type":"paragraph","text":"Laborum deserunt veniam in deserunt ea dolor consequat reprehenderit ad reprehenderit sint. Dolore nisi aliqua velit officia pariatur commodo veniam dolore mollit laborum aute eu enim deserunt. Proident magna duis ex est consequat tempor eu dolore.","spans":[]}]},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"Video":{"link_type":"Web","url":"https://slicemachine.dev"},"Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading1","text":"Seize world-class content","spans":[]}],"Description":[{"type":"paragraph","text":"Pariatur et eu id non irure enim ipsum qui aute aliquip tempor minim. Qui dolore ex adipisicing excepteur laborum elit dolor ex aliqua.","spans":[]}]},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"Video":{"link_type":"Web","url":"https://prismic.io"},"Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading1","text":"Target virtual experiences","spans":[]}],"Description":[{"type":"paragraph","text":"Ea cupidatat commodo ea. Est in amet consequat non labore enim tempor consectetur aute dolore proident ut aute ex consectetur. Dolor officia consequat ad elit nulla nulla voluptate consequat duis consequat labore.","spans":[]}]}],"primary":{"SectionTitle":"monetize user-centric web services","SectionNumber":"exploit virtual bandwidth"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
