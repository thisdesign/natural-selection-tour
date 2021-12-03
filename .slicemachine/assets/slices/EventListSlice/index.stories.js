import MyComponent from '../../../../slices/EventListSlice'
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/EventListSlice',
}

export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone,
  },
  methods: {
    resolve() {
      return MyComponent
    },
  },
  data() {
    return {
      mock: {
        variation: 'default-slice',
        name: 'Default slice',
        slice_type: 'event_list_slice',
        items: [
          {
            Active: true,
            Month: 'January',
            Start: 18,
            End: 20,
            Graphic: {
              dimensions: { width: 1400, height: 500 },
              alt: 'Placeholder image',
              copyright: null,
              url: 'https://images.prismic.io/naturalselectiontour/f0a227be-2540-4002-85df-f7ea61dfd6b9_mock-graphic.png?auto=compress,format',
            },
            Title: [
              {
                type: 'heading2',
                text: 'Productize innovative methodologies',
                spans: [],
              },
            ],
            Location: [
              {
                type: 'paragraph',
                text: 'Wyoming, USA 37.5665˚N 126.9780˚E The Tetons',
                spans: [],
              },
            ],
            Description: [
              {
                type: 'paragraph',
                text: 'Deserunt enim consectetur ut fugiat magna incididunt sint ad. Labore ex excepteur ea amet fugiat reprehenderit cillum dolor eu quis sunt sint aute.',
                spans: [],
              },
            ],
            Status: 'terrain-prep',
            SnowDescription: [
              {
                type: 'paragraph',
                text: 'Mollit Lorem elit aute et.',
                spans: [],
              },
            ],
            SnowAmount: 8240,
            SnowUnits: 'in',
          },
          {
            Active: true,
            Month: 'January',
            Start: 23,
            End: 43,
            Graphic: {
              dimensions: { width: 1400, height: 500 },
              alt: 'Placeholder image',
              copyright: null,
              url: 'https://images.prismic.io/naturalselectiontour/f0a227be-2540-4002-85df-f7ea61dfd6b9_mock-graphic.png?auto=compress,format',
            },
            Title: [
              {
                type: 'heading2',
                text: 'Productize innovative methodologies',
                spans: [],
              },
            ],
            Location: [
              {
                type: 'paragraph',
                text: 'Wyoming, USA 37.5665˚N 126.9780˚E The Tetons',
                spans: [],
              },
            ],
            Description: [
              {
                type: 'paragraph',
                text: 'Deserunt enim consectetur ut fugiat magna incididunt sint ad. Labore ex excepteur ea amet fugiat reprehenderit cillum dolor eu quis sunt sint aute.',
                spans: [],
              },
            ],
            Status: 'terrain-prep',
            SnowDescription: [
              {
                type: 'paragraph',
                text: 'Mollit Lorem elit aute et.',
                spans: [],
              },
            ],
            SnowAmount: 8240,
            SnowUnits: 'in',
          },
          {
            Active: false,
            Month: 'January',
            Start: 20,
            End: 31,
            Graphic: {
              dimensions: { width: 1400, height: 500 },
              alt: 'Placeholder image',
              copyright: null,
              url: 'https://images.prismic.io/naturalselectiontour/f0a227be-2540-4002-85df-f7ea61dfd6b9_mock-graphic.png?auto=compress,format',
            },
            Title: [
              {
                type: 'heading2',
                text: 'Matrix value-added e-markets',
                spans: [],
              },
            ],
            Location: [
              {
                type: 'paragraph',
                text: 'Wyoming, USA 37.5665˚N 126.9780˚E The Tetons',
                spans: [],
              },
            ],
            Description: [
              {
                type: 'paragraph',
                text: 'Velit veniam cupidatat dolor nulla proident culpa proident nisi ea laboris. Quis ad reprehenderit deserunt ut eu magna esse aliqua exercitation dolore enim.',
                spans: [],
              },
            ],
            Status: 'terrain-prep',
            SnowDescription: [
              {
                type: 'paragraph',
                text: 'Average annual snow depth',
                spans: [],
              },
            ],
            SnowAmount: 9943,
            SnowUnits: 'in',
          },
          {
            Active: false,
            Month: 'January',
            Start: 15,
            End: 17,
            Graphic: {
              dimensions: { width: 1400, height: 500 },
              alt: 'Placeholder image',
              copyright: null,
              url: 'https://images.prismic.io/naturalselectiontour/f0a227be-2540-4002-85df-f7ea61dfd6b9_mock-graphic.png?auto=compress,format',
            },
            Title: [
              {
                type: 'heading2',
                text: 'Brand interactive supply-chains',
                spans: [],
              },
            ],
            Location: [
              {
                type: 'paragraph',
                text: 'Wyoming, USA 37.5665˚N 126.9780˚E The Tetons',
                spans: [],
              },
            ],
            Description: [
              {
                type: 'paragraph',
                text: 'Elit amet ex in exercitation anim irure Lorem do labore Lorem officia laboris irure fugiat deserunt.',
                spans: [],
              },
            ],
            Status: 'wx-hold',
            SnowDescription: [
              {
                type: 'paragraph',
                text: 'Average annual snow depth',
                spans: [],
              },
            ],
            SnowAmount: 7587,
            SnowUnits: 'in',
          },
        ],
        primary: {
          SectionTitle: 'Events',
          SectionNumber: '05',
        },
        id: '_DefaultSlice',
      },
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
})
_DefaultSlice.storyName = 'Default slice'
