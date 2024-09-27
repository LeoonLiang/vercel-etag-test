export default function getImageNameFromUrl(url: string) {
  // 创建一个 URL 对象
  const parsedUrl = new URL(url);

  // 使用 pathname 属性获取路径并用 '/' 分割，取最后一部分
  const segments = parsedUrl.pathname.split('/');

  // 返回最后一部分作为图片名称
  return segments.pop();
}