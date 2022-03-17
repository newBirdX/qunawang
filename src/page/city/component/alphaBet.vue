<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "alphaBet",
  props: ["cities"],
  data() {
    return {
      touchStatus: false,
      startY: 0,
      //节流
      timer: null,
    };
  },
  methods: {
    handleLetterClick(e) {
      // console.log(e.target.innerText);
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 80;
          const index = Math.floor((touchY - this.startY) / 14);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
          console.log(index);
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    text-align: center;
    color: @bgColor;
    // line-height: .4rem;
  }
}
</style>