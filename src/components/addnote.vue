<template>
  <section>
    <button id="btn" type="button" @click="showModal">New Note</button>
    <transition name="slide-fade">
      <div id="myModal" class="modal" v-show="isShow">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close" @click="isShow = false">&times;</span>
            <h2>Add Note</h2>
          </div>
          <div class="modal-body">
            <form>
              <div>
                <label for="full-name">Title</label>
                <br />
                <input type="text" id="title" placeholder="Note Title" required />
              </div>
              <div>
                <label for="Content">Content</label>
                <br />
                <textarea cols="70" rows="10"></textarea>
                <br />
                <button>Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    showModal() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style scoped>
#btn {
  position: absolute;
  bottom: 40px;
}
input,
textarea {
  padding: 0.6rem;
  box-sizing: border-box;
  justify-content: space-between;
  font-size: 0.9rem;
}
label {
  text-align: right;
  width: 30%;
}
input,
textarea {
  border: 2px solid #000000;
  width: 50%;
  border-radius: 2px;
}
button {
  padding: 5px 20px;
  background: #000000;
  color: #ffffff;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  position: fixed;
  bottom: 0;
  background-color: #fefefe;
  width: 100%;
}
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #504d4d;
  text-decoration: none;
  cursor: pointer;
}
.modal-header {
  padding: 1px 10px;
  background-color: #000000;
  color: white;
}
.modal-body {
  padding: 5px 10px;
}
</style>