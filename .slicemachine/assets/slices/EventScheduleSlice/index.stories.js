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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_schedule_slice","items":[{"date":"2013-01-31T01:42:12.903Z","description":[{"type":"paragraph","text":"Magna voluptate velit dolor duis quis in.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"}},{"date":"2020-12-10T09:13:22.429Z","description":[{"type":"paragraph","text":"Elit enim magna ut mollit adipisicing. Cupidatat labore eiusmod irure occaecat nostrud in eiusmod sint est laboris mollit. Nostrud esse duis enim anim in.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"}},{"date":"2019-05-30T22:16:27.130Z","description":[{"type":"paragraph","text":"Duis exercitation consequat Lorem id nisi ullamco fugiat eiusmod. Enim Lorem dolore nisi sint amet ut.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"}},{"date":"2014-03-31T07:09:11.865Z","description":[{"type":"paragraph","text":"Eu Lorem commodo commodo veniam ipsum sit laborum. Et et aute aliquip enim ea nostrud dolore quis adipisicing ullamco ullamco sunt.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"}},{"date":"2020-08-22T14:26:31.323Z","description":[{"type":"paragraph","text":"Sunt laborum sint qui esse culpa.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"}}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
