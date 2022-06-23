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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_carousel_slice","items":[{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"Video":{"link_type":"Web","url":"https://prismic.io"},"Link":{"link_type":"Web","url":"http://google.com"},"Title":[{"type":"heading1","text":"Visualize integrated infomediaries","spans":[]}],"Description":[{"type":"paragraph","text":"Aute mollit officia sint duis tempor consequat amet esse duis qui. Culpa elit quis fugiat est dolor incididunt nostrud ipsum anim Lorem qui quis.","spans":[]}]},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"Video":{"link_type":"Web","url":"https://prismic.io"},"Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading1","text":"Whiteboard strategic ROI","spans":[]}],"Description":[{"type":"paragraph","text":"Aliquip aliqua ut velit aute minim esse elit incididunt laboris aliquip amet enim non veniam deserunt. Proident excepteur dolor eiusmod anim labore pariatur adipisicing aute ullamco cillum consequat fugiat. Adipisicing reprehenderit velit sint.","spans":[]}]},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"Video":{"link_type":"Web","url":"http://google.com"},"Link":{"link_type":"Web","url":"https://slicemachine.dev"},"Title":[{"type":"heading1","text":"Deliver back-end synergies","spans":[]}],"Description":[{"type":"paragraph","text":"Nulla amet officia veniam ea in do laboris.","spans":[]}]},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"Video":{"link_type":"Web","url":"http://twitter.com"},"Link":{"link_type":"Web","url":"https://prismic.io"},"Title":[{"type":"heading1","text":"Enable B2B portals","spans":[]}],"Description":[{"type":"paragraph","text":"Eu labore adipisicing cillum adipisicing anim ipsum enim ullamco excepteur nisi. Laboris nisi exercitation cupidatat eiusmod nisi tempor proident aliqua sit labore duis. Excepteur do ullamco sint id tempor ea tempor nulla consectetur.","spans":[]}]}],"primary":{"SectionTitle":"syndicate value-added architectures","SectionNumber":"revolutionize visionary ROI"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
