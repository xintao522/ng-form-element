import Vue from 'vue'
// 导入组件
// 导入组件，组件必须声明 name
import NgFormDesign from './form-design/index.vue'
import NgFormBuild from './form-design/build.vue' 
import NgFormNode from './form-design/panel-container/node.vue' 

import NgFormItem from './form-design/items/index.vue' 
import NgFormItemNode from './form-design/items/node.vue' 

import NgForm  from './ng-form/index.vue'

NgForm.install = function (Vue) { 
  Vue.component(NgForm.name, NgForm)
}

// 为组件提供 install 安装方法，供按需引入
NgFormDesign.install = function (Vue) { 
  Vue.component(NgFormDesign.name, NgFormDesign)
}
// 为组件提供 install 安装方法，供按需引入
NgFormBuild.install = function (Vue) { 
  Vue.component(NgFormBuild.name, NgFormBuild)
}
 

NgFormNode.install = function (Vue) { 
  Vue.component(NgFormNode.name, NgFormNode)
}

NgFormItem.install = function (Vue) { 
  Vue.component(NgFormItem.name, NgFormItem)
}

NgFormItemNode.install = function (Vue) { 
  Vue.component(NgFormItemNode.name, NgFormItemNode)
}

// NgFormItemBase.install = function (Vue) { 
//   Vue.component(NgFormItemBase.name, NgFormItemBase)
// }
// 默认导出组件
const components = [ NgForm , NgFormDesign,NgFormBuild,NgFormItem,NgFormNode,NgFormItemNode/*,NgFormItemBase*/]
 
 

// 存储组件列表 
 
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  install.installed = true
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}
 
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
 
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
}