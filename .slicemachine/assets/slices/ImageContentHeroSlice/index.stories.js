import MyComponent from '../../../../slices/ImageContentHeroSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageContentHeroSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_content_hero_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Matrix dot-com platforms","spans":[]}],"description":[{"type":"paragraph","text":"Lorem tempor ullamco ad cillum. Fugiat quis laborum Lorem ad nulla magna velit deserunt velit quis velit Lorem mollit ex velit. Nisi culpa aliquip enim pariatur laboris.","spans":[]}],"Hero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"CtaLink":{"link_type":"Web","url":"http://google.com"},"CtaTitle":"e-enable 24/365 channels"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
