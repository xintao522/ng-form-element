// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
  

const obj = {}
 
obj.type = 'slider'//, // 表单类型 
obj.component = BaseIndex
//obj.properties = BaseProperties

// 序号 实际在json中删除
obj.seq = 12

// 补充配置样式
obj.options = {
	config: {
      size: 'mini',
      labelWidth: 80
    },
    columns: [
        {
            label: '标签', 
            prop: 'label',
            default: '滑动输入条',
            span: 24,
        },
        {
            label: '所占栅格', 
            type: 'slider',
            prop: 'span',
            min: 1,
            max: 24,
            default: 24,
            span: 24,
        },
        {
            label: '数据字段', 
            prop: 'model',
            span: 24,
        },
        {
            label: '数据KEY', 
            prop: 'key',
            show: false,
            span: 24,
        },
        {
            type: 'divider',
            label: '效验规则'
        },
        { 
            prop: 'rules',
            type: 'rules',
            labelWidth: 0,
            default: [{ 
                required: false, // 必须填写
                message: "必填项",
                trigger: ['blur'] 
            }],
            span: 24, 
        },
        {
            type: 'divider', 
        }
    ],
    group: [
        {
            label: '外观',
            prop: 'options',
            alone: false, // 是否独立与columns之外展示 false则和columns一起，不另外显示
            collapse: false, // 是否启用 collapse 必须alone=true
            column: [ 
                {
                    label: '标签宽度', 
                    prop: 'labelWidth',
                    type: 'number',
                    min: -1,
                    max: 1000,
                    default: -1,
                    span: 24,
                },
                {
                    label: '要素宽度', 
                    prop: 'width',  
                    default: '100%',
                    span: 24,
                },
                {
                    label: '最大值', 
                    prop: 'max',  
                    type: 'number',
                    min: 1,
                    default: 5 ,
                    span: 24,
                },
                {
                    label: '最小值', 
                    prop: 'min',  
                    type: 'number',
                    min: 1,
                    default: 0 ,
                    span: 24,
                },
                 {
                    label: '步长', 
                    prop: 'step',  
                    type: 'number',
                    min: 1,
                    default: 0 ,
                    span: 24,
                },
                {
                    label: '默认值', 
                    prop: 'defaultValue', 
                    type: 'number', 
                    span: 24,
                },  
               
                {
                  label: '输入框',
                  prop: 'showInput',
                  type: 'switch',
                  default: false,
                  span: 24,
                } ,
                {
                  label: '标记',
                  prop: 'marks',
                  type: 'kv', 
                  span: 24,
                } ,
                {
                  label: '是否隐藏',
                  prop: 'hidden',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                  label: '是否禁用',
                  prop: 'disabled',
                  type: 'switch',
                  default: false,
                  span: 24,
                }  

            ]
        }
    ] 
}
 

export default obj

