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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_schedule_slice","items":[{"date":"2018-03-28T14:44:09.067Z","description":[{"type":"paragraph","text":"Nostrud et laborum ex tempor consectetur elit id veniam.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"}},{"date":"2020-01-04T04:45:18.114Z","description":[{"type":"paragraph","text":"Velit culpa magna Lorem consequat aute labore ut sunt proident qui voluptate elit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"}},{"date":"2016-02-25T15:18:58.347Z","description":[{"type":"paragraph","text":"Tempor cupidatat mollit dolor reprehenderit esse magna duis voluptate incididunt. Anim minim quis voluptate deserunt laborum elit proident cillum. Deserunt fugiat ipsum duis aute id cillum aliquip tempor cupidatat esse qui dolore pariatur.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"}},{"date":"2021-03-20T15:38:48.146Z","description":[{"type":"paragraph","text":"Sint eiusmod duis elit aliqua esse veniam sint voluptate nostrud elit laborum. Fugiat nostrud deserunt eu ad aliquip laboris occaecat non Lorem aliqua. Adipisicing ullamco dolor nisi voluptate nostrud.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"}}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
