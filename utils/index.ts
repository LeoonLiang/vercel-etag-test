
export function parseTime(time: number, format = 'y-M-d H:m:s') {
  if (arguments.length === 0 || !time) {
    return null
  }
  if (typeof time === 'string') {
    if (/^[0-9]+$/.test(time)) {
      time = parseInt(time)
    } else {
      time = Date.parse(time)
    }
  }
  if ((typeof time === 'number') && (time.toString().length === 10)) {
    time = time * 1000
  }
  const date = typeof time === 'object' ? time : new Date(time)
  const formatObj = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    H: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds()
  }
  return format.replace(/(y|M|d|H|m|s)/g, (result, key) => {
    // @ts-ignore
    let value = formatObj[key]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
}

