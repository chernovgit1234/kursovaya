// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      finished: false,
      steps: [
        {state: 'active', title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {state: '', title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {state: '', title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {state: '', title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {state: '', title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ]
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      this.activeIndex--;
      this.steps[this.activeIndex].state = 'active';
      this.steps[this.activeIndex + 1].state = '';
    },
    reset() {
      // начать заново
      this.steps.map(i=>{return i.state = ''});
      this.steps[0].state = 'active';
      this.finished = false;
      this.activeIndex = 0;

    },
    next() {
      // кнопка вперед закончить
      this.activeIndex++;
      this.steps[this.activeIndex].state = 'active';
      this.steps[this.activeIndex - 1].state = 'done';
      stepOut = false
     
    },
    //закончить
    Finish(){
      this.finished = true
    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
      this.activeIndex = idx;
      this.steps[idx].state = 'active';
     
      for  (let i = 0; this.steps.length-1; i++) {
        if (i < idx) {
          this.steps[i].state = 'done';
        }
        else if (i > idx) {
          this.steps[i].state = '';
        }
      }
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    textActive() {
      return this.steps[this.activeIndex].text;
    },
    // 2. выключена ли кнопка назад
    btnBack() {
      if (this.activeIndex === 0) {
        return true;
      }
      
    },
    // 3. находимся ли мы на последнем шаге
    stepOut() {
      if (this.activeIndex === 4) {
        return true;
      }
    },
  }
}

Vue.createApp(App).mount('#app')