import MyComponent from '../../../../slices/Streams';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Streams'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"streams","items":[],"primary":{"title":[{"type":"heading1","text":"Synergize cross-platform channels","spans":[]}],"description":[{"type":"paragraph","text":"Commodo magna adipisicing fugiat amet culpa ex dolor magna. Nulla irure sunt sunt fugiat excepteur proident elit consequat eiusmod velit magna officia. Duis adipisicing in nulla enim id fugiat sunt excepteur magna cillum qui aliqua occaecat.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
