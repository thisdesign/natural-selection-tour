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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"event_schedule_slice","items":[{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"Date":"2014-09-02","Description":[{"type":"paragraph","text":"Est amet non laborum id aliqua do dolore culpa. Velit ad ea amet exercitation ullamco qui nisi aute reprehenderit mollit ut. Ut ipsum velit quis qui dolor anim consequat esse commodo qui sit ex veniam.","spans":[]}],"Link":{"link_type":"Web","url":"http://twitter.com"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"Date":"2019-03-29","Description":[{"type":"paragraph","text":"Reprehenderit proident officia aute anim esse irure sit commodo nulla aliqua elit sunt.","spans":[]}],"Link":{"link_type":"Web","url":"https://prismic.io"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"Date":"2015-07-15","Description":[{"type":"paragraph","text":"Nisi sint ea nisi non fugiat.","spans":[]}],"Link":{"link_type":"Web","url":"http://google.com"}}],"primary":{"SectionNumber":"streamline ubiquitous convergence","SectionTitle":"envisioneer world-class channels","Active":false},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
