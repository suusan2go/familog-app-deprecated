/* flow */
const HOST = process.env.NODE_ENV === 'development' ? 'http://192.168.1.6:8080' : 'https://api.familog.net'

export const DEVICE_URL: string = `${HOST}/device`
export const SESSION_URL: string = `${HOST}/session`
