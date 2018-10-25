import Vue from 'vue';
const HelloComponent = () =>
  import('./components/Hello.vue' /* webpackChunkName: "Hello" */);
const HelloDecoratorComponent = () =>
  import('./components/HelloDecorator.vue' /* webpackChunkName: "HelloDecorator" */);

const v = new Vue({
  el: '#app',
  template: `
    <div>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
        </div>
    `,
  data: { name: 'World' },
  components: {
    HelloComponent,
    HelloDecoratorComponent,
  },
});
