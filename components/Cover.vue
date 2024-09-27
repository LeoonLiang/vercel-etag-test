<template>
  <div class="leoon-cover">
    <div class="ratio-block" :style="ratioStyle"></div>
    <img
      class="leoon-cover-img"
      :style="imageStyle"
      :src="urlList[currentIndex]"
      :loading="loading"
      @error="handleError"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  loading: {
    type: String as PropType<'lazy' | 'eager'>,
    default: 'lazy'
  },
  ratio: [String, Number],
  fit: {
    type: String as PropType<
      'cover' | 'fill' | 'contain' | 'scale-down' | undefined
    >,
    // validator(v: string | undefined) {
    //   return v === 'cover' || v === 'fill' || v === 'contain' || v === 'none' || v === 'scale-down' || v === undefined;
    // },
    default: 'cover'
  },
  initialIndex: {
    type: Number,
    default: 0
  }
})
const currentIndex = ref(props.initialIndex)
const ratioStyle = computed(() => {
  const ratio =
    typeof props.ratio === 'string'
      ? parseFloat(props.ratio) || 16 / 9
      : props.ratio || 16 / 9
  return `padding-bottom: ${Math.round(10000 / ratio) / 100}%;`
})
const imageStyle = computed(() => {
  let style = ''
  if (props.fit) {
    style = `${style}object-fit:${props.fit};`
  }
  return style
})
const weservUrl = computed(() => {
  return 'https://images.weserv.nl/?url=' + props.src
})

const urlList = computed(() => {
  return [
    props.src,
    weservUrl.value
  ]
})
const handleError = () => {
  // 尝试下一个 URL
  if (currentIndex.value < urlList.value.length - 1) {
    currentIndex.value++
  }
}
</script>

<style lang="scss">
.leoon-cover {
  position: relative;
  overflow: hidden;
  perspective: 1000;
  backface-visibility: hidden;
  .leoon-cover-img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
