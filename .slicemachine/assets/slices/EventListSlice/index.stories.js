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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_list_slice","items":[{"Active":true,"Month":"iterate global mindshare","Start":"brand one-to-one web services","StartColor":"#3fac93","End":"architect proactive solutions","EndColor":"#73dafa","Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"Title":[{"type":"heading1","text":"Incentivize holistic networks","spans":[]}],"Location":[{"type":"paragraph","text":"Esse id irure mollit nostrud nulla consequat exercitation irure occaecat tempor ea. Cillum commodo culpa aute officia proident fugiat aliquip consequat cillum eu. Excepteur enim sint ea dolore ea nisi pariatur in ad nulla.","spans":[]}],"Description":[{"type":"paragraph","text":"Tempor occaecat proident pariatur. Proident est aute exercitation laborum esse mollit pariatur esse esse tempor reprehenderit veniam et. Dolore in adipisicing aliquip duis laboris reprehenderit nostrud consectetur ad irure.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Id occaecat veniam velit laborum id sunt sit aute veniam incididunt. Veniam nulla enim pariatur fugiat sunt ut deserunt irure consectetur commodo et ad do non minim. Commodo pariatur sit nisi sunt mollit et.","spans":[]}],"SnowAmount":7145,"SnowUnits":"in","SnowPercent":8309},{"Active":false,"Month":"facilitate cross-platform web-readiness","Start":"empower customized methodologies","StartColor":"#ce695f","End":"deliver visionary vortals","EndColor":"#4316b2","Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"Title":[{"type":"heading1","text":"Expedite transparent supply-chains","spans":[]}],"Location":[{"type":"paragraph","text":"Culpa amet dolor ea do excepteur. Laborum duis veniam sint nulla fugiat eu labore do.","spans":[]}],"Description":[{"type":"paragraph","text":"Nulla occaecat culpa do ullamco nostrud enim magna minim eu reprehenderit nisi. Id eiusmod minim incididunt consectetur culpa irure sit reprehenderit cillum proident sunt. Eu cillum cupidatat elit ullamco reprehenderit incididunt voluptate et.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Est est ad pariatur amet officia.","spans":[]}],"SnowAmount":9036,"SnowUnits":"in","SnowPercent":1638},{"Active":true,"Month":"incubate turn-key e-commerce","Start":"aggregate bleeding-edge web services","StartColor":"#c10d5a","End":"e-enable best-of-breed e-commerce","EndColor":"#cdc517","Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"Title":[{"type":"heading1","text":"Seize cutting-edge ROI","spans":[]}],"Location":[{"type":"paragraph","text":"Veniam reprehenderit reprehenderit id proident tempor proident dolore incididunt officia elit. Esse ipsum anim eiusmod culpa ullamco excepteur commodo laboris fugiat tempor.","spans":[]}],"Description":[{"type":"paragraph","text":"Mollit aliquip in culpa mollit et non sint amet elit quis eiusmod qui ipsum reprehenderit. Ullamco occaecat velit incididunt dolor aliquip exercitation qui aliquip amet ad. Tempor officia qui laboris ut cillum adipisicing Lorem in ut.","spans":[]}],"Status":"terrain-prep","SnowDescription":[{"type":"paragraph","text":"Quis Lorem Lorem sunt sit ad eu aliqua nulla aliquip consectetur exercitation cillum.","spans":[]}],"SnowAmount":5314,"SnowUnits":"in","SnowPercent":9580},{"Active":true,"Month":"matrix efficient blockchains","Start":"disintermediate 24/7 e-services","StartColor":"#fb29ed","End":"revolutionize transparent ROI","EndColor":"#002591","Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"Title":[{"type":"heading1","text":"Grow dot-com platforms","spans":[]}],"Location":[{"type":"paragraph","text":"Pariatur Lorem velit nulla. Anim mollit nisi voluptate dolore voluptate aliquip magna aliquip voluptate labore dolor.","spans":[]}],"Description":[{"type":"paragraph","text":"Laboris ex ex fugiat deserunt tempor enim eiusmod nostrud nostrud. Ipsum nisi ut do qui enim anim incididunt ipsum occaecat fugiat consectetur elit. Mollit eiusmod laborum pariatur.","spans":[]}],"Status":"archived","SnowDescription":[{"type":"paragraph","text":"Aliqua reprehenderit proident officia occaecat dolore do commodo deserunt anim nostrud est aliqua ex. Aliqua magna do exercitation et laboris enim adipisicing incididunt non proident sunt enim nisi occaecat enim.","spans":[]}],"SnowAmount":9414,"SnowUnits":"in","SnowPercent":958},{"Active":false,"Month":"incubate vertical convergence","Start":"expedite extensible niches","StartColor":"#c8082e","End":"incentivize clicks-and-mortar users","EndColor":"#12f3c7","Graphic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"Title":[{"type":"heading1","text":"Enable interactive e-business","spans":[]}],"Location":[{"type":"paragraph","text":"Incididunt eiusmod adipisicing ullamco sit deserunt. Do cupidatat exercitation reprehenderit laboris officia.","spans":[]}],"Description":[{"type":"paragraph","text":"Cillum amet proident nulla culpa reprehenderit magna id laborum est in dolor veniam. Deserunt pariatur duis eu dolore nostrud voluptate cupidatat mollit veniam in.","spans":[]}],"Status":"wx-hold","SnowDescription":[{"type":"paragraph","text":"Nostrud culpa adipisicing dolor aute aliquip deserunt excepteur aute ea cupidatat. Magna Lorem velit anim consequat dolor voluptate fugiat duis ea adipisicing consectetur consectetur qui tempor non.","spans":[]}],"SnowAmount":6173,"SnowUnits":"in","SnowPercent":9526}],"primary":{"SectionTitle":"architect one-to-one infomediaries","SectionNumber":"morph plug-and-play methodologies","CenterItems":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
