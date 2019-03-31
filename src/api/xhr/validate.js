import { struct } from 'superstruct'

const Model = struct({
  code: 'number',
  data: 'object?',
  msg: 'string?',
  timestamp: 'number',
})

const validate = (data) => {
  return new Promise((resolve, reject) => {
    try {
      Model(data)
      let code = parseInt(data.code)
      if (code > 0) {
        return reject(data)
      }
      return resolve(data)
    } catch (e) {
      console.warn(e)
      return reject({ msg: '数据校验不成功', code: 2001 })
    }

  })
}

export default validate
