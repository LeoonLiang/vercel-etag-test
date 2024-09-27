<template>
  <NuxtLink
    :to="`https://www.bilibili.com/video/${videoData.bvid}`"
    target="_blank"
    class="leoon-video-card leoon-resource"
    leoon-id="VideoClick"
    leoon-title="视频点击"
    leoon-type="resource"
    :leoon-data-id="videoData.bvid"
    :leoon-data-title="videoData.title"
    leoon-data-type="video"
  >
    <div class="leoon-video-card-img-wrapper">
      <Cover
        :initial-index="1"
        :src="videoData.pic + `@750w.webp`"
        :ratio="16 / 9"
        fit="cover"
      ></Cover>
      <div class="leoon-video-card-time">{{ videoData.length }}</div>
    </div>
    <div class="leoon-video-card-title">{{ videoData.title }}</div>
    <div class="leoon-video-card-date">{{ parseTime(videoData.created * 1000, 'y-M-d') }}</div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { VideoData } from '@/entities/Bilibili'
import { parseTime } from '@/utils'
const props = defineProps({
  videoData: {
    type: Object as PropType<VideoData>,
    default: () => ({})
  }
})
</script>

<style lang="scss">
.leoon-video-card {
  font-size: 14px;
  color: var(--font-primary);
  text-decoration: none;
  &:hover {
    color: #c99a05;
  }
}
.leoon-video-card-img-wrapper {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.leoon-video-card-time {
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #000;
  font-size: 11px;
  color: #fff;
  border-top-left-radius: 4px;
  padding: 2px 4px;
}
.leoon-video-card-date {
  font-size: 13px;
  color: var(--font-tertiary)
}
.leoon-video-card-title {
  margin-top: 8px;
}
</style>
