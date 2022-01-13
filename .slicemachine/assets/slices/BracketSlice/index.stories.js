import MyComponent from '../../../../slices/BracketSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BracketSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"bracket_slice","items":[],"primary":{"SectionTitle":"utilize open-source infomediaries","SectionNumber":"benchmark virtual e-services","EventID":"envisioneer frictionless synergies","EventName":"whiteboard out-of-the-box action-items"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
