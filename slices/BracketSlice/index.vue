<template>
  <section class="section">
    <div class="site-padding">
      <element-section-bar
        ref="bar"
        :number="slice.primary.SectionNumber"
        :title="slice.primary.SectionTitle"
      />
    </div>
    <div class="bracket-columns site-padding">
      <div class="bracket-column">
        <div class="bracket-set">
          <div class="bracket-rider">
            <div class="rider-info">
              <h3 class="rider-name">Sage Kotsenburg</h3>
              <img src="/mocks/flag-mock.jpg" alt="" />
            </div>
            <div class="rider-ratings">
              <div class="rating">90.5</div>
              <div class="rating">93.9</div>
            </div>
          </div>
          <div class="bracket-rider"></div>
        </div>
        <div class="bracket-set">
          <div class="bracket-rider"></div>
          <div class="bracket-rider"></div>
        </div>
        <div class="bracket-set">
          <div class="bracket-rider"></div>
          <div class="bracket-rider"></div>
        </div>
        <div class="bracket-set">
          <div class="bracket-rider"></div>
          <div class="bracket-rider"></div>
        </div>
      </div>
      <div class="bracket-column">
        <div class="bracket-set">
          <div class="bracket-rider"></div>
          <div class="bracket-rider"></div>
        </div>
        <div class="bracket-set">
          <div class="bracket-rider"></div>
          <div class="bracket-rider"></div>
        </div>
      </div>
      <div class="bracket-column">
        <div class="bracket-set">
          <div class="bracket-rider"></div>
          <div class="bracket-rider"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BracketSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  padding-right: 0;
}
.bracket-columns {
  display: flex;
  overflow: scroll;
}
.bracket-column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 1rem;
}
.bracket-set {
  margin-bottom: 1rem;
}
.bracket-rider {
  width: 43vw;
  background: rgba(41, 41, 41, 0.76);
  border: 1px solid #ffffff;
  height: 5rem;
  display: flex;
  margin-bottom: 0.5rem;
}
.rider-info {
  display: flex;
  align-items: center;
  width: 65%;
  padding: 0.5rem;
}
.rider-name {
  font-family: 'Natural-Selection', sans-serif;
  font-size: 2vw;
  line-height: 0.7;
  margin-bottom: 0;
}
.rider-ratings {
  display: flex;
  width: 35%;
  .rating {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid white;
  }
}
</style>
