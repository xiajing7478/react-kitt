// ts中提供ReturnType获取函数返回值的类型
// 【重点】类型声明里面不要直接使用引入import...from...
// 而是使用 import("@/store") 这种语法
// import store from "@/store"
// TS中提供了ReturnType，用来获取函数类型的返回值类型
declare type rootState = ReturnType<typeof import('@/store').getState>;

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: function;
}
