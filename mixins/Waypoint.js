export default {
  data() {
    return {
      waypointActive: false,
    }
  },
  methods: {
    onWaypoint(props) {
      const { going } = props
      if (going === 'in') {
        this.waypointActive = true
      }
    },
  },
}
