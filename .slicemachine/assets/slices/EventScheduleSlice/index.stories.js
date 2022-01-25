import MyComponent from '../../../../slices/EventScheduleSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/EventScheduleSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_schedule_slice","items":[{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"Date":"2015-01-13","Description":[{"type":"paragraph","text":"Proident nulla veniam est proident culpa ea.","spans":[]}],"Link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"Date":"2017-03-08","Description":[{"type":"paragraph","text":"Mollit ea esse magna adipisicing consectetur.","spans":[]}],"Link":{"link_type":"Web","url":"http://google.com"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"Date":"2016-06-03","Description":[{"type":"paragraph","text":"Pariatur quis enim enim nisi ad eiusmod.","spans":[]}],"Link":{"link_type":"Web","url":"http://google.com"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"Date":"2020-09-08","Description":[{"type":"paragraph","text":"Velit fugiat Lorem elit amet aliquip nulla enim sunt et qui sint exercitation labore aute. Irure reprehenderit magna ullamco eu proident velit excepteur proident.","spans":[]}],"Link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"SectionNumber":"recontextualize sticky communities","SectionTitle":"drive intuitive partnerships","Active":false},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
