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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_content_hero_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Iterate granular systems","spans":[]}],"description":[{"type":"paragraph","text":"Occaecat incididunt ex eiusmod adipisicing anim labore eu reprehenderit excepteur dolore eiusmod do et eiusmod.","spans":[]}],"Hero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"CtaLink":{"link_type":"Web","url":"http://twitter.com"},"CtaTitle":"aggregate robust mindshare"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
