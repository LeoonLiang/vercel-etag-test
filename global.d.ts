declare module 'global/window' {
  // DocumentTouch: 已过时 Gecko 25 (Firefox 25 / Thunderbird 25 / SeaMonkey 2.22)
  const w: Window & typeof globalThis & { DocumentTouch } & { Hls };
  export default w;
}
