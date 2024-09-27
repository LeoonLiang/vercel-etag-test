export interface VideoData {
  aid: number;                    // 视频的AV号或ID
  attribute: number;              // 视频的属性，可能代表一些特定的标志或状态
  author: string;                 // 作者的名字
  bvid: string;                   // 视频的BV号
  comment: number;                // 评论数
  copyright: string;              // 版权信息，通常是"1"代表自制，"2"代表转载
  created: number;                // 创建时间（时间戳格式）
  description: string;            // 视频描述
  enable_vt: number;              // 是否启用虚拟化技术 (一般是0或1)
  hide_click: boolean;            // 是否隐藏点击数
  is_avoided: number;             // 是否被避开 (通常是0或1)
  is_charging_arc: boolean;       // 是否为收费拱形 (通常是false或true)
  is_lesson_finished: number;     // 课程是否完成 (通常是0或1)
  is_lesson_video: number;        // 是否为课程视频 (通常是0或1)
  is_live_playback: number;       // 是否为直播回放 (通常是0或1)
  is_pay: number;                 // 是否为付费视频 (通常是0或1)
  is_steins_gate: number;         // 是否为斯坦因之门 (通常是0或1)
  is_union_video: number;         // 是否为联合视频 (通常是0或1)
  jump_url: string;               // 跳转URL (为空字符串表示没有)
  length: string;                 // 视频长度 (格式为"分钟:秒")
  lesson_update_info: string;     // 课程更新信息
  meta: any;                      // 元数据 (可能为null或其他类型)
  mid: number;                    // 作者的MID（用户ID）
  pic: string;                    // 视频封面图片的URL
  play: number;                   // 播放次数
  playback_position: number;      // 回放位置
  review: number;                 // 审核状态
  season_id: number;              // 季节ID (通常为0)
  subtitle: string;               // 字幕 (通常为空字符串)
  title: string;                  // 视频标题
  typeid: number;                 // 视频类型ID
  video_review: number;           // 视频审核 (通常为0)
  vt: number;                     // 视频类型 (通常为0)
  vt_display: string;             // 视频类型显示名称
}
