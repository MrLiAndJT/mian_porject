import { registerMicroApps } from 'qiankun'
import config from './config'

const { subApps } = config

export function registerApps() {
  try {
    registerMicroApps(subApps, {
      // beforeLoad: [
      //   (app: any) => {
      //     console.log('before load', app)
      //   }
      // ],
      // beforeLoad: [
      //   () => {
      //   }
      // ],
      // beforeMount: [
      //   (app: any) => {
      //     console.log('before mount', app)
      //   }
      // ],
      // afterUnmount: [
      //   (app: any) => {
      //     console.log('before unmount', app)
      //   }
      // ]
    })
  } catch (err) {
    console.log(err)
  }
}
