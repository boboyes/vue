import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)  //new Vue时内部调用init方法
}

//init方法在里面注入，//此函数只有一个作用，给Vue构造函数挂载init实例方法
initMixin(Vue)   
//给Vue的原型挂载实例属性和方法 $data/$props/$set/$delete/$watch
stateMixin(Vue)  
//初始化事件相关方法//$on/$once/$off/$emit
eventsMixin(Vue)
//初始化生命周期相关的混入方法
//_update/$foreceUpdate/$destroy
lifecycleMixin(Vue)
//混入render方法 $nextTick/_render
renderMixin(Vue)

export default Vue
