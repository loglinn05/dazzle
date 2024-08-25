<template>
  <TransitionGroup name="list" @beforeLeave="beforeLeave">
    <slot></slot>
  </TransitionGroup>
</template>

<script setup>
function beforeLeave(el) {
  const { marginLeft, marginTop, width, height } = window.getComputedStyle(el)
  el.style.left = `${el.offsetLeft - parseFloat(marginLeft)}px`
  el.style.top = `${el.offsetTop - parseFloat(marginTop)}px`
  el.style.width = width
  el.style.height = height
}
</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
