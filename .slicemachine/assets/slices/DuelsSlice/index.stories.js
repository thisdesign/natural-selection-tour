import MyComponent from '../../../../slices/DuelsSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/DuelsSlice'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"player1":{"id":"mock_document_id","link_type":"Document","type":"rider","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"},"player2":{"id":"mock_document_id","link_type":"Document","type":"rider","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}},{"player1":{"id":"mock_document_id","link_type":"Document","type":"rider","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"},"player2":{"id":"mock_document_id","link_type":"Document","type":"rider","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{"sectionTitle":"SECTION","sectionNumber":"01"},"id":"_Default","slice_type":"duels_slice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
