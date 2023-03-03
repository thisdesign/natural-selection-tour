import MyComponent from '../../../../slices/RiderRandomizerSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/RiderRandomizerSlice'
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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{"rider":{"id":"mock_document_id","link_type":"Document","type":"rider","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{"logo":{"link_type":"Media","name":"mock","kind":"image","url":"https://source.unsplash.com/random","size":"10kB"}},"id":"_DefaultSlice","slice_type":"rider_randomizer_slice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''
