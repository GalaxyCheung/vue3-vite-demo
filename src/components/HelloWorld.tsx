import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs, slots, emit }) {
    const count = ref(1);
    const state = reactive({
      count
    });

    return () => (
      <>
        <h1>{props.msg}</h1>
        <button onClick={() => state.count++}>count is: {state.count}</button>
        <p>
          Edit <code>components/HelloWorld.tsx</code> to test hot module replacement.
        </p>
      </>
    );
  }
});
