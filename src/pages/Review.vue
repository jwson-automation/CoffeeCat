<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary bg-white">
      <q-input
        v-model="newTask"
        @keyup.enter="addTask"
        class="col"
        square
        filled
        placeholder="감상문 추가"
        dense
        style="background-color: white; margin-top: 20px"
      >
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
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
    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="primary" />
      <div class="text-h5 text-primary text-center">일정을 등록해주세요.</div>
    </div>
  </q-page>

  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="warning" color="primary" text-color="white" />
        <span class="q-ml-sm">정말로 삭제하시겠어요?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="취소" color="primary" v-close-popup />
        <q-btn
          flat
          label="삭제"
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
    const newTask = ref("");

    const addTask = () => {
      tasks.push({
        title: newTask.value,
        done: false,
      });
      newTask.value = "";
    };
    const tasks = reactive([
      { title: "감상문 기능은 추가중입니다.", done: false },
    ]);

    const deleteTask = (index) => {
      tasks.splice(index, 1);
      $q.notify("Deleted");
    };

    const showConfirmDialog = (index) => {
      confirm.value = true;
      confirmIndex.value = index;
    };

    const $q = useQuasar();
    const confirm = ref(false);
    const confirmIndex = ref(-1);

    return {
      addTask,
      newTask,
      tasks,
      deleteTask,
      confirm,
      confirmIndex,
      showConfirmDialog,
    };
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
.no-tasks {
  opacity: 0.5;
}
.bg-primary {
  background-color: white;
}
</style>
