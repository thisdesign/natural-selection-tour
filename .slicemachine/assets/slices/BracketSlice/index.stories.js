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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"bracket_slice","items":[],"primary":{"SectionTitle":"target dot-com experiences","SectionNumber":"visualize revolutionary niches","EventID":"unleash cross-platform vortals","EventName":"exploit vertical supply-chains","PollingEnabled":false,"EventEndpoint":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
