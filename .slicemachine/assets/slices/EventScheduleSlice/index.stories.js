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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_schedule_slice","items":[{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"Date":"2013-11-25","Description":[{"type":"paragraph","text":"Esse ullamco consequat adipisicing elit consectetur laborum.","spans":[]}],"Link":{"link_type":"Web","url":"https://prismic.io"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"Date":"2013-07-20","Description":[{"type":"paragraph","text":"Occaecat eiusmod et cupidatat duis sint. Fugiat irure culpa aliquip aute incididunt adipisicing elit et Lorem consequat.","spans":[]}],"Link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"SectionNumber":"innovate impactful niches","SectionTitle":"benchmark web-enabled relationships","Active":false},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
