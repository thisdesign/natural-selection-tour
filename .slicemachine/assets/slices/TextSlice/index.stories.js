import MyComponent from '../../../../slices/TextSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"SectionNumber":"monetize cutting-edge channels","SectionTitle":"incubate integrated applications","Text":[{"type":"paragraph","text":"Amet officia eiusmod voluptate aliquip anim exercitation sit. Cupidatat excepteur aliquip adipisicing velit laboris reprehenderit ex eu culpa veniam occaecat voluptate duis minim.","spans":[]}],"CtaTitle":"reinvent 24/365 e-commerce","CtaLink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
