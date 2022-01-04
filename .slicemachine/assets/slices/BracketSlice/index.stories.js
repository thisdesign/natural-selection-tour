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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"bracket_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Enhance front-end architectures","spans":[]}],"description":[{"type":"paragraph","text":"Nostrud exercitation veniam exercitation magna officia do elit ipsum non aliquip.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
