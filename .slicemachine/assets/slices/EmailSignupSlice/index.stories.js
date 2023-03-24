import MyComponent from '../../../../slices/EmailSignupSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/EmailSignupSlice'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"sectionNumber":"cast","sectionTitle":"due","content":[{"type":"paragraph","text":"Consectetur non laborum nostrud exercitation dolore.","spans":[]}]},"id":"_Default","slice_type":"email_signup_slice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
