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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_content_hero_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Generate extensible mindshare","spans":[]}],"description":[{"type":"paragraph","text":"Velit ipsum velit culpa dolor ea et qui aute commodo ad labore dolor proident.","spans":[]}],"Hero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"CtaLink":{"link_type":"Web","url":"https://prismic.io"},"CtaTitle":"target user-centric functionalities"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
