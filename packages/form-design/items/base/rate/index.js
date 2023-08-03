// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'      

const obj = {}
 
obj.type = 'rate'//, // 表单类型 
obj.component = BaseIndex
//obj.properties = BaseProperties

// 序号 实际在json中删除
obj.seq = 11

// 补充配置样式
obj.options = {
	config: {
      size: 'mini',
      labelWidth: 80
    },
    columns: [
        {
            label: $t('ngform.item.label'), //'标签', 
            prop: 'label',
            default: $t('ngform.item.rate.name'),//'评分',
            span: 24,
        },
        {
            label: $t('ngform.item.label_width'), //'标签宽度', 
            prop: 'labelWidth',
            type: 'number',
            min: -1,
            max: 1000,
            default: -1,
            span: 24,
        },
        {
            label: $t('ngform.item.width'), //'要素宽度', 
            prop: 'width',  
            default: '100%',
            span: 24,
        },
        {
            label: $t('ngform.item.span') ,//'所占栅格', 
            type: 'slider',
            prop: 'span',
            min: 1,
            max: 24,
            default: 24,
            span: 24,
        },
        {
            label: $t('ngform.item.model') , //'数据字段', 
            prop: 'model',
            span: 24,
        },
        {
            label: $t('ngform.item.key') , //'数据KEY', 
            prop: 'key',
            show: false,
            span: 24,
        },
        {
            type: 'divider',
            label: $t('ngform.item.validate_rule') , //'效验规则'
        },
        { 
            prop: 'rules',
            type: 'rules',
            labelWidth: 0,
            default: [{ 
                required: false, // 必须填写
                message: $t('ngform.item.required'), //"必填项",
                trigger: ['blur'] 
            }],
            span: 24, 
        } 
    ],
    group: [
        {
            label: $t('ngform.item.options') ,//'属性',
            prop: 'options',
            alone: true, // 是否独立与columns之外展示 false则和columns一起，不另外显示
            collapse: false, // 是否启用 collapse 必须alone=true
            column: [ 
                 
                {
                    label: $t('ngform.item.rate.max'),//'最大值', 
                    prop: 'max',  
                    type: 'number',
                    min: 1,
                    default: 5 ,
                    span: 24,
                },
                {
                    label: $t('ngform.item.default_value') ,//'默认值', 
                    prop: 'defaultValue', 
                    type: 'number', 
                    span: 24,
                },  
               
                {
                  label: $t('ngform.item.rate.allow_half'),//'允许半选',
                  prop: 'allowHalf',
                  type: 'switch',
                  default: false,
                  span: 24,
                } ,
                {
                  label: $t('ngform.item.if_hidden'),//'是否隐藏',
                  prop: 'hidden',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                  label: $t('ngform.item.if_disabled') ,//'是否禁用',
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


