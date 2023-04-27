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
      <q-card
        v-for="(task, index) in tasks.slice().reverse()"
        :key="task.title"
        class="q-pa-md"
      >
        <q-card-section class="q-pa-md">
          <q-item-section avatar> 익명의 오리너구리 </q-item-section>
          <q-item-section>
            <q-item-label class="toDoTitle">{{ task.title }}</q-item-label>
            <q-item-label class="toDoTitle">{{ task.date }}</q-item-label>
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
        </q-card-section>
      </q-card>
    </q-list>
    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="primary" />
      <div class="text-h5 text-primary text-center">감상문을 등록해주세요.</div>
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
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useQuasar } from "quasar";
import { db } from "boot/firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  deleteDoc,
} from "firebase/firestore";
import { randomNameBox } from "boot/firebase";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const newTask = ref("");
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const tasks = reactive([]);

    const randomName =
      "익명의 " + randomNameBox[Math.floor(Math.random() * 100)];

    const ReviewsRef = collection(db, "tasks");

    const backupRef = collection(db, "backup");

    let ConnectedSize = -1;

    getDocs(ReviewsRef).then((querySnapshot) => {
      console.log(querySnapshot.size + "size");
      ConnectedSize = querySnapshot.size;
    });

    const addTask = () => {
      getDocs(ReviewsRef).then((querySnapshot) => {
        console.log(querySnapshot.size + "size");
        ConnectedSize = querySnapshot.size;
      });
      const now = new Date();
      const formattedDate = `${now.getFullYear().toString().substr(-2)}/${(
        now.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${now.getDate().toString().padStart(2, "0")} ${now
        .getHours()
        .toString()
        .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
      tasks.push({
        id: ConnectedSize + 1,
        name: randomName,
        title: newTask.value,
        done: true,
        date: formattedDate,
      });
      setDoc(doc(ReviewsRef, ConnectedSize + 1 + ""), {
        id: ConnectedSize + 1,
        name: randomName,
        title: newTask.value,
        done: false,
        date: formattedDate,
      });
      setDoc(doc(backupRef, ConnectedSize + 1 + ""), {
        id: ConnectedSize + 1,
        name: randomName,
        title: newTask.value,
        done: false,
        date: formattedDate,
      });
      newTask.value = "";
    };

    const loadTasks = async () => {
      const q = query(collection(db, "tasks"));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        tasks.push(doc.data());
      });
    };

    const deleteTask = async (index) => {
      console.log(tasks.length - 1);
      tasks.splice(tasks.length - 1, 1);
      $q.notify("Deleted");
      console.log("check");
      console.log(tasks.length - index + "삭제된 번호입니다.");
      await deleteDoc(doc(db, "tasks", tasks.length - index - 1 + ""));
    };

    const showConfirmDialog = (index) => {
      confirm.value = true;
      confirmIndex.value = index;
    };

    const $q = useQuasar();
    const confirm = ref(false);
    const confirmIndex = ref(-1);

    onMounted(() => loadTasks());

    return {
      addTask,
      newTask,
      tasks,
      deleteTask,
      confirm,
      confirmIndex,
      showConfirmDialog,
      db,
      loadTasks,
    };
  },
});
</script>

<style lang="scss">
.done {
  .toDoTitle {
    color: blue;
  }
}
.no-tasks {
  opacity: 0.5;
}
.bg-primary {
  background-color: white;
}
.q-item-section {
  font-family: "Gamja Flower", "sans-serif";
}
</style>
