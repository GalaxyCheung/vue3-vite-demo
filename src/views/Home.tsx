import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld';

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <>
        <div>111</div>
        <HelloWorld />
      </>
    );
  }
});
