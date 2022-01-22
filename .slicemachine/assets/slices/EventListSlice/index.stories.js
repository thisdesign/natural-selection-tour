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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_list_slice","items":[{"Active":true,"Month":"scale next-generation web services","Start":"disintermediate back-end eyeballs","StartColor":"#6012df","End":"deploy robust e-markets","EndColor":"#edbdd7","Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"Title":[{"type":"heading1","text":"Morph cross-platform technologies","spans":[]}],"Location":[{"type":"paragraph","text":"Veniam eu ad eiusmod cupidatat ea incididunt elit deserunt fugiat nulla sunt duis ex reprehenderit.","spans":[]}],"Description":[{"type":"paragraph","text":"Lorem id eiusmod Lorem non proident amet. Tempor laborum do mollit ex labore id ut veniam aliqua.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Est qui officia ad magna ad.","spans":[]}],"SnowAmount":6697,"SnowUnits":"in","SnowPercent":4756},{"Active":true,"Month":"transform impactful vortals","Start":"repurpose synergistic vortals","StartColor":"#67457f","End":"target 24/7 paradigms","EndColor":"#5758b8","Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"Title":[{"type":"heading1","text":"Innovate compelling e-tailers","spans":[]}],"Location":[{"type":"paragraph","text":"Sit minim elit dolore ad eu anim enim laborum consequat ullamco ipsum.","spans":[]}],"Description":[{"type":"paragraph","text":"Qui magna esse deserunt occaecat nostrud id fugiat. Aute ullamco qui officia consectetur nisi irure aute ad non veniam sint anim cillum ut incididunt.","spans":[]}],"Status":"blank","SnowDescription":[{"type":"paragraph","text":"Irure veniam qui minim labore adipisicing amet consectetur. Pariatur exercitation nisi sunt ad amet occaecat veniam consectetur nulla aliquip deserunt aliqua ea.","spans":[]}],"SnowAmount":5908,"SnowUnits":"in","SnowPercent":4467},{"Active":true,"Month":"reinvent impactful metrics","Start":"redefine sexy schemas","StartColor":"#b7dab4","End":"harness impactful platforms","EndColor":"#3094e2","Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"Title":[{"type":"heading1","text":"Reinvent cutting-edge supply-chains","spans":[]}],"Location":[{"type":"paragraph","text":"Anim culpa nisi eiusmod sunt amet qui.","spans":[]}],"Description":[{"type":"paragraph","text":"Excepteur aute quis quis eu adipisicing cupidatat reprehenderit est. Consectetur eiusmod sunt aute enim ex fugiat nostrud proident magna occaecat ut ullamco officia. Consectetur sint nisi excepteur eu magna nostrud deserunt labore excepteur incididunt Lorem.","spans":[]}],"Status":"wx-hold","SnowDescription":[{"type":"paragraph","text":"Deserunt duis consectetur aliqua esse sint nisi. Elit excepteur dolore ea magna dolor ut id nisi esse deserunt ullamco anim duis ut. Sit reprehenderit voluptate labore irure qui commodo reprehenderit sint labore incididunt laborum magna ipsum cillum quis.","spans":[]}],"SnowAmount":5377,"SnowUnits":"in","SnowPercent":3347}],"primary":{"SectionTitle":"incubate real-time infrastructures","SectionNumber":"whiteboard killer bandwidth","CenterItems":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
