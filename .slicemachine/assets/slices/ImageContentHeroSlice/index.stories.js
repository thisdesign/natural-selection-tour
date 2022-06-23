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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_content_hero_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Reinvent best-of-breed vortals","spans":[]}],"description":[{"type":"paragraph","text":"Ea cillum fugiat labore labore occaecat ex culpa consequat Lorem minim quis anim veniam do reprehenderit. Eu anim dolore Lorem esse consequat labore enim veniam sunt exercitation ullamco enim. Eu cupidatat magna laborum reprehenderit esse proident deserunt Lorem excepteur exercitation.","spans":[]}],"Hero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"CtaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"CtaTitle":"optimize cutting-edge networks"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
