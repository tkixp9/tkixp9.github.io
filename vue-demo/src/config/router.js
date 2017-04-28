import Components from '../components/Components.js';

const {
  Login,
  Home,
  NotFound,
  Content,
  Modules
} = Components;

export default [{
  path: '/',
  redirect: to => {
    return 'login';
  },
  hidden: true
}, {
  path: '/login',
  component: Login,
  hidden: true
}, {
  path: '/404',
  component: Home,
  hidden: true,
  children: [{
    path: '',
    component: NotFound
  }]
}, {
  path: '/wh',
  name: '微友助手',
  icon: 'inbox',
  component: Home,
  children: [{
    hidden: true,
    path: '',
    redirect: to => {
      return 'operationmanager'
    }
  }, /*{
    path: 'statistics',
    name: '统计数据',
    icon: 'database',
    component: Content,
    children: [{
      hidden: true,
      path: '',
      redirect: to => {
        return 'overview'
      }
    }, {
      path: 'overview',
      name: '数据总览',
      icon: 'cubes',
      component: Modules.Wh.Statistics.Overview
    }, {
      path: 'officialrobot',
      name: '官方机器人统计',
      icon: 'university',
      component: Modules.Wh.Statistics.Officialrobot
    }, {
      path: 'personalrobot',
      name: '专属机器人统计',
      icon: 'lock',
      component: Modules.Wh.Statistics.Personalrobot
    }, {
      path: 'features',
      name: '功能使用统计',
      icon: 'reorder',
      component: Modules.Wh.Statistics.Features
    }, {
      path: 'active',
      name: '活跃留存统计',
      icon: 'line-chart',
      component: Modules.Wh.Statistics.Active
    }]
  },*/ {
    path: 'operationmanager',
    name: '配置管理',
    icon: 'gear',
    component: Content,
    children: [{
      hidden: true,
      path: '',
      redirect: to => {
        return 'noticemanager'
      }
    }, {
      path: 'noticemanager',
      name: '公告管理',
      icon: 'bell-o',
      component: Modules.Wh.Operationmanager.Noticemanager
    }, {
      path: 'apkmanager',
      name: 'Apk管理',
      icon: 'android',
      component: Modules.Wh.Operationmanager.Apkmanager
    }]
  },/* {
    path: 'vipmanager',
    name: '配置管理',
    icon: 'inbox',
    component: Content,
    children: [{
      hidden: true,
      path: '',
      redirect: to => {
        return 'userinfomanager'
      }
    }, {
      path: 'userinfomanager',
      name: '早报设定',
      icon: 'reorder',
      component: Modules.Wh.Vipmanager.Userinfomanager
    }]
  }*/]
},/* {
  path: '/function',
  name: '功能模块',
  icon: 'inbox',
  component: Home,
  children: [{
    hidden: true,
    path: '',
    redirect: to => {
      return 'open'
    }
  }, {
    path: 'open',
    name: '公共内容',
    icon: 'inbox',
    component: Content,
    children: [{
      hidden: true,
      path: '',
      redirect: to => {
        return 'echarts'
      }
    }, {
      path: 'echarts',
      name: '图表',
      icon: 'bar-chart',
      component: Modules.Function.Open.Echarts
    }, {
      path: 'list',
      name: '列表',
      icon: 'reorder',
      component: Modules.Function.Open.List
    }, {
      path: 'form',
      name: '表单',
      icon: 'edit',
      component: Modules.Function.Open.Form
    }, {
      path: 'vuex',
      name: 'Vuex',
      icon: 'window-restore',
      component: Modules.Function.Open.Vuex
    }, {
      path: 'test404',
      name: '测试404',
      icon: 'window-restore',
      component: Modules.Function.Open.Test404
    }]
  }]
}, {
  path: '/adv',
  name: '再次封装',
  icon: 'inbox',
  component: Home,
  children: [{
    hidden: true,
    path: '',
    redirect: to => {
      return 'article'
    }
  }, {
    path: 'components',
    name: '高级示例',
    icon: 'inbox',
    component: Content,
    children: [{
      hidden: true,
      path: '',
      redirect: to => {
        return 'list'
      }
    }, {
      path: 'list',
      name: '列表组件',
      icon: 'reorder',
      component: Modules.Adv.Components.List
    }, {
      path: 'edit',
      name: '表单组件',
      icon: 'edit',
      component: Modules.Adv.Components.Edit
    }]
  }, {
    path: 'article',
    name: '文章管理',
    icon: 'inbox',
    component: Content,
    children: [{
      hidden: true,
      path: '',
      redirect: to => {
        return 'list'
      }
    }, {
      path: 'list',
      name: '文章列表',
      icon: 'reorder',
      component: Modules.Adv.Article.List
    }, {
      path: 'edit',
      name: '编辑文章',
      icon: 'edit',
      component: Modules.Adv.Article.Edit
    }]
  }, {
    path: 'wangeditor',
    name: 'wangeditor富文本',
    icon: 'inbox',
    component: Content,
    children: [{
      hidden: true,
      path: '',
      redirect: to => {
        return 'one'
      }
    }, {
      path: 'one',
      name: '单个',
      icon: 'reorder',
      component: Modules.Adv.Wangeditor.One
    }, {
      path: 'many',
      name: '多个',
      icon: 'edit',
      component: Modules.Adv.Wangeditor.Many
    }]
  }]
}*/];
