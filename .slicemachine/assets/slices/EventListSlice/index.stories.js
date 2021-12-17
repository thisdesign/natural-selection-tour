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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_list_slice","items":[{"Active":true,"Month":"strategize B2B convergence","Start":1912,"End":5327,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Reinvent plug-and-play technologies","spans":[]}],"Location":[{"type":"paragraph","text":"Ut mollit aliquip mollit consectetur est mollit do laboris deserunt est non nostrud. Lorem anim veniam nisi irure.","spans":[]}],"Description":[{"type":"paragraph","text":"Non qui ad voluptate Lorem.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Laborum officia Lorem eu adipisicing duis amet sint aute ut excepteur excepteur sint. Ipsum adipisicing fugiat qui nulla eu esse nulla magna commodo consectetur.","spans":[]}],"SnowAmount":2251,"SnowUnits":"c","SnowPercent":8906},{"Active":false,"Month":"facilitate back-end convergence","Start":5000,"End":7747,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Streamline scalable partnerships","spans":[]}],"Location":[{"type":"paragraph","text":"Commodo sunt et qui.","spans":[]}],"Description":[{"type":"paragraph","text":"In mollit veniam tempor do exercitation officia nulla sunt dolore officia.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Id Lorem ex ipsum dolore.","spans":[]}],"SnowAmount":8929,"SnowUnits":"in","SnowPercent":8071},{"Active":false,"Month":"architect B2B applications","Start":6522,"End":9278,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Target value-added applications","spans":[]}],"Location":[{"type":"paragraph","text":"Ipsum laborum Lorem labore labore qui aliquip consequat non laborum ipsum. Enim et tempor aliqua aliqua. Ea do qui veniam ut ea excepteur laborum sunt amet do adipisicing.","spans":[]}],"Description":[{"type":"paragraph","text":"Fugiat duis velit eiusmod exercitation veniam.","spans":[]}],"Status":"wx-hold","SnowDescription":[{"type":"paragraph","text":"Veniam eu sint laboris dolore ad fugiat magna et laboris incididunt sunt id aliquip.","spans":[]}],"SnowAmount":2468,"SnowUnits":"in","SnowPercent":914},{"Active":true,"Month":"orchestrate open-source e-business","Start":9695,"End":7416,"Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Integrate end-to-end vortals","spans":[]}],"Location":[{"type":"paragraph","text":"Laboris reprehenderit dolore est esse consequat culpa adipisicing qui nulla sit ex laboris. Ullamco ex proident nisi reprehenderit labore dolore consectetur ipsum quis proident consectetur occaecat sunt. Et deserunt quis deserunt cupidatat sit ullamco ullamco esse do id commodo.","spans":[]}],"Description":[{"type":"paragraph","text":"Non in excepteur do.","spans":[]}],"Status":"wx-hold","SnowDescription":[{"type":"paragraph","text":"Enim id deserunt in occaecat.","spans":[]}],"SnowAmount":9653,"SnowUnits":"in","SnowPercent":7113}],"primary":{"SectionTitle":"engage seamless niches","SectionNumber":"visualize mission-critical bandwidth"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
