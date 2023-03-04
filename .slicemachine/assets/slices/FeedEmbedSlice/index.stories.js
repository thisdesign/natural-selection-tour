import MyComponent from '../../../../slices/FeedEmbedSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeedEmbedSlice'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"feedurl":{"link_type":"Web","url":"http://google.com"},"feedActive":true,"inactiveDescription":[{"type":"paragraph","text":"Laboris ea officia adipisicing consequat nulla nisi ullamco in nostrud officia anim cupidatat irure nostrud. Adipisicing est nisi enim consequat elit consectetur fugiat laboris dolore consequat velit elit id qui excepteur.","spans":[]}]},"id":"_Default","slice_type":"feed_embed_slice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
