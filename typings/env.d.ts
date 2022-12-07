/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

/** import.meta.glob */
declare interface ImportMetaGlob<T> {
  readonly default: T
}

/** 通过vite注入的全局变量 */
declare const PROJECT_BUILD_TIME: string

// 主进程环境变量
declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly RENDER_PORT: string
  }
}
