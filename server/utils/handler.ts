import type { EventHandler, EventHandlerRequest } from 'h3'

export const defineWrappedResponseHandler = <T extends EventHandlerRequest, D>(
  handler: EventHandler<T, D>
): EventHandler<T, D> =>
  defineEventHandler<T>(async event => {
    try {
      const requestETag = getHeader(event, 'if-none-match')
      // 在路由处理程序之前执行某些操作
      const response = await handler(event)
      // 将 res 转为 JSON
      const resJson = JSON.stringify(response);

      // 生成 ETag
      const etag = generateETag(resJson);
      setHeader(event, 'ETag', etag);

      if (requestETag && requestETag === etag) {
        // 返回 304 Not Modified
        event.node.res.statusCode = 304;
        event.node.res.end(); // 结束响应
        return;
      }
      // 在路由处理程序之后执行某些操作
      return response
    } catch (err) {
      // 错误处理
      return { err }
    }
  })
