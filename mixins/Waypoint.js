export default {
  data() {
    return {
      waypointActive: false,
    }
  },
  methods: {
    onWaypoint({ going }) {
      if (going === 'in') {
        this.waypointActive = true
      }
    },
  },
}
