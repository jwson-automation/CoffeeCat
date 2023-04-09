<template>
  <q-page class="bg-grey-3 column">
    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done bg-blue-1': task.done }"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            class="no-pointer-events"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="toDoTitle">{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-item-label>
            <q-btn
              @click.stop="showConfirmDialog(index)"
              flat
              round
              color="primary"
              dense
              icon="delete"
            />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>

  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="warning" color="primary" text-color="white" />
        <span class="q-ml-sm">정말로 삭제하시겠어요?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn
          flat
          label="Delete"
          color="primary"
          @click="deleteTask(confirmIndex)"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const tasks = reactive([
      { title: "밥먹기", done: true },
      { title: "코딩하기", done: false },
      { title: "숙제하기", done: false },
    ]);

    const deleteTask = (index) => {
      tasks.splice(index, 1);
      $q.notify("Deleted");
    };

    const $q = useQuasar();

    const showConfirmDialog = (index) => {
      confirm.value = true;
      confirmIndex.value = index;
    };

    const confirm = ref(false);
    const confirmIndex = ref(-1);

    return { tasks, deleteTask, confirm, confirmIndex, showConfirmDialog };
  },
});
</script>

<style lang="scss">
.done {
  .toDoTitle {
    text-decoration: line-through;
    color: red;
  }
}
</style>
