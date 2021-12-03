import MyComponent from '../../../../slices/EventListSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/EventListSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_list_slice","items":[{"Active":false,"Month":"exploit back-end technologies","Start":9259,"End":6963,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Reinvent turn-key interfaces","spans":[]}],"Location":[{"type":"paragraph","text":"Tempor enim culpa nostrud laborum consequat commodo aute nisi ullamco aliquip.","spans":[]}],"Description":[{"type":"paragraph","text":"Cillum deserunt nulla anim veniam tempor sit elit exercitation. Elit proident est magna non proident ea culpa nulla commodo.","spans":[]}],"Status":"wx-hold","SnowDescription":[{"type":"paragraph","text":"Et exercitation labore mollit voluptate elit pariatur labore nostrud qui pariatur aute do tempor Lorem excepteur. Cillum ipsum cillum ut ut ad laboris occaecat irure irure exercitation mollit pariatur pariatur non amet.","spans":[]}],"SnowAmount":9991,"SnowUnits":"in"},{"Active":false,"Month":"leverage open-source models","Start":3021,"End":344,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Leverage out-of-the-box action-items","spans":[]}],"Location":[{"type":"paragraph","text":"Nostrud officia irure eiusmod non nostrud consectetur laboris officia velit ex reprehenderit ad nisi labore dolor. Aute ex labore deserunt sunt consectetur nostrud.","spans":[]}],"Description":[{"type":"paragraph","text":"Aliquip tempor consectetur dolor dolor proident qui amet sint velit sunt pariatur irure duis nisi ex. Voluptate ullamco esse sunt nisi nisi mollit adipisicing labore dolore aliqua anim.","spans":[]}],"Status":"archived","SnowDescription":[{"type":"paragraph","text":"Magna aliquip elit adipisicing est ullamco do fugiat officia. Nostrud consectetur qui qui labore commodo consequat consequat magna.","spans":[]}],"SnowAmount":5715,"SnowUnits":"c"},{"Active":true,"Month":"embrace frictionless infomediaries","Start":6459,"End":2935,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Grow seamless networks","spans":[]}],"Location":[{"type":"paragraph","text":"In incididunt deserunt veniam et quis proident. Est reprehenderit consectetur cillum.","spans":[]}],"Description":[{"type":"paragraph","text":"Pariatur tempor proident ullamco ex labore commodo nostrud do. Enim dolor excepteur elit veniam ut elit veniam.","spans":[]}],"Status":"wx-hold","SnowDescription":[{"type":"paragraph","text":"Eu proident nostrud elit ea ipsum esse nisi cupidatat est aliquip dolor pariatur. Officia ullamco anim in adipisicing exercitation tempor nostrud id ea excepteur.","spans":[]}],"SnowAmount":616,"SnowUnits":"c"}],"primary":{"SectionTitle":"optimize e-business functionalities","SectionNumber":"reinvent strategic web-readiness"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
