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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"bracket_slice","items":[],"primary":{"SectionTitle":"harness strategic web services","SectionNumber":"orchestrate cross-platform technologies","EventID":"enable holistic partnerships","EventName":"cultivate distributed metrics","PollingEnabled":false,"EventEndpoint":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
