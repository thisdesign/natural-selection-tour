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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_content_hero_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Iterate efficient e-tailers","spans":[]}],"description":[{"type":"paragraph","text":"Ipsum reprehenderit excepteur cillum qui ut ullamco sint ex sint qui excepteur anim.","spans":[]}],"Hero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"CtaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"CtaTitle":"scale leading-edge deliverables"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
