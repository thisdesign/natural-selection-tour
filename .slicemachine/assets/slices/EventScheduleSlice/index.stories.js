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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_schedule_slice","items":[{"date":"2017-10-16T05:28:03.469Z","description":[{"type":"paragraph","text":"Cillum proident laboris aliquip ut excepteur. Ad occaecat fugiat consequat voluptate Lorem irure. Est adipisicing commodo non consectetur anim fugiat consequat mollit deserunt pariatur do.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"}},{"date":"2021-11-07T18:10:27.645Z","description":[{"type":"paragraph","text":"Velit ex adipisicing excepteur amet occaecat est.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"}},{"date":"2017-09-23T16:14:53.051Z","description":[{"type":"paragraph","text":"Dolore non ad nostrud.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"}},{"date":"2020-01-19T22:01:00.056Z","description":[{"type":"paragraph","text":"Cupidatat ex ut non consequat. Do elit nisi nulla mollit sunt aliquip fugiat consequat velit Lorem eiusmod labore aliqua.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"}},{"date":"2016-08-10T19:44:58.049Z","description":[{"type":"paragraph","text":"Enim enim magna proident ipsum adipisicing labore ullamco pariatur. Sint deserunt non nostrud non anim fugiat excepteur dolor aute nisi mollit. Laborum ut exercitation irure eu voluptate sunt ea ea minim adipisicing commodo.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"}},{"date":"2017-08-11T23:59:22.822Z","description":[{"type":"paragraph","text":"Esse sit tempor dolore magna dolor dolor ea quis amet excepteur.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"}},{"date":"2021-06-16T20:11:06.601Z","description":[{"type":"paragraph","text":"Aute et tempor tempor fugiat dolor consectetur anim dolor.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"}}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
