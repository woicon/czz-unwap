<template>
  <div class="c-modal" v-if="visible">
    <transition
      :name="guaranteedOverlayTransition"
      @before-enter="beforeOverlayTransitionEnter"
      @after-enter="afterOverlayTransitionEnter"
      @before-leave="beforeOverlayTransitionLeave"
      @after-leave="afterOverlayTransitionLeave"
    >
      <div class="c-modal-header">
        {{ title }}
        <i class="icon-close" />
      </div>
      <div class="c-modal-container">
        <slot />
      </div>
      <div v-if="footer" class="c-modal-bar">
        <Button>{{ okText }}</Button>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "Modal",
  components: {
    Button,
  },
  props: {
    title: String,
    footer: Boolean,
  },
  data() {
    return {
      footer: true,
      visible: false,
      okText: "确定 ",
    };
  },
  methods: {
    startTransitionEnter() {
      this.visibility.overlay = true;
      this.visibility.modal = true;
    },
    startTransitionLeave() {
      this.visibility.overlay = false;
      this.visibility.modal = false;
    },
  },
};
</script>

<style>
.c-modal {
  &-header {
  }
}
</style>
