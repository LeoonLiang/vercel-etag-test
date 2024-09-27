<template>
  <div class="video-wrapper">
    <div class="video-card-container">
      <div v-for="item in list" class="video-card-wrapper">
        <VideoCard :video-data="item"></VideoCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { VideoData } from '@/entities/Bilibili'
import VideoCard from '@/fragments/VideoCard.vue'
const list = ref<VideoData[]>([])

const getBilbiBili = async () => {
  try {
    const { data } = await $fetch<{ data: VideoData[] }>('/api/video')
    if (data) {
      list.value = data
    }
  } catch (error) {
  }
}
onBeforeMount(() => {
  getBilbiBili()
})
</script>

<style lang="scss">
.video-wrapper {
  position: relative;
  margin: 40px auto;
  width: 1200px;
  padding: 0 16px;
  box-sizing: border-box;
  max-width: 100%;
}
.video-card-container {
  display: flex;
  flex-wrap: wrap;
}
.video-card-wrapper {
  width: 25%;
  padding: 10px;
  box-sizing: border-box;
}
.list-loading {
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
  .loading-dom {
    margin-right: 8px;
  }
}
.video-card-wrapper {
  .el-skeleton__image {
    height: 150px;
  }
}
@media screen and (max-width: 700px) {
  .video-card-wrapper {
    width: 50%;
    padding: 8px;
    box-sizing: border-box;
    .el-skeleton__image {
      height: 100px;
    }
  }
}
</style>
