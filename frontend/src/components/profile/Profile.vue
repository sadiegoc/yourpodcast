<template>
    <div class="profile" :class="{ dark: themeDark }">
        <div class="backdrop" :class="{ show: showBackdrop }"></div>
        <div class="modal bg-soft" :class="{ dark: themeDark, hideModal: !showBackdrop }" v-if="image">
            <VueCropper
                ref="cropper"
                :src="image"
                :aspect-ratio="1"
                :view-mode="1"
                :drag-mode="'crop'"
                :auto-crop-area="1"
                :background="false"
                :movable="true"
                :scalable="true"
                :zoomable="true"
                :rotatable="true"
                :crop-box-resizable="true"
                :crop-box-movable="true"
                style="width: 300px; height: 300px; margin: 0 auto;">
            </VueCropper>
            <div class="control-buttons">
                <button class="btn" @click="getCroppedImage">Crop</button>
                <button class="btn" @click="cancelCrop">Cancel</button>
            </div>
        </div>

        <div class="user-form">
            <div class="image">
                <img v-if="croppedImage" :src="croppedImage" alt="Profile">
                <img v-else :src="user.profilePath" alt="Profile">
                <label for="input-file">
                    <span>Edit</span>
                </label>
                <input id="input-file" type="file" @change="onFileChange" name="input-file">
            </div>
            <div class="data">
                <input type="text" class="bg-hover" v-model="name" :placeholder="user.name" :class="{ dark: themeDark }">
                <button class="btn" type="submit" @click="save()">Save</button>
            </div>
        </div>
        <span class="msg" :class="{ err }">{{ msg }}</span>

        <div class="my-podcasts">
            <div class="podcasts-configs" :class="{ dark: themeDark }">
                <h1 class="title">Your podcasts</h1>
                <div class="configs">
                    <router-link to="/upload" v-if="user">
                        <i class="fa fa-upload"></i>
                        Upload
                    </router-link>
                </div>
            </div>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PodcastCard from '../home/PodcastCard.vue';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css'
import User from '@/services/user';
import { userKey } from '@/config/global';

export default {
    name: 'ProfilePage',
    data () {
        return {
            image: null,
            croppedImage: null,
            showBackdrop: false,
            name: "",
            msg: "",
            err: false
        }
    },
    components: { PodcastCard, VueCropper },
    computed: mapState(['user', 'themeDark']),
    methods: {
        save () {
            if (this.croppedImage && this.name) {
                const croppedImageResize = this.$refs.cropper.getCroppedCanvas({
                    width: 150, height: 150
                })
    
                croppedImageResize.toBlob((blob) => {
                    const formData = new FormData();
                    formData.append('profilePicture', blob, 'profile.jpg')
                    formData.append('name', this.name)
    
                    User.update(formData, this.user.id, this.user.token)
                        .then(() => {
                            this.user.name = this.name
                            this.user.profilePath = this.croppedImage
                            localStorage.setItem(userKey, JSON.stringify(this.user))
                            this.msg = "Usuário atualizado com sucesso."
                            this.err = false
                        })
                        .catch(err => console.log(err))
                })
            } else if (this.name) {
                const formData = new FormData();
                formData.append('name', this.name)
                User.update(formData, this.user.id, this.user.token)
                    .then(() => {
                        this.user.name = this.name
                        localStorage.setItem(userKey, JSON.stringify(this.user))
                        this.msg = "Usuário atualizado com sucesso."
                        this.err = false
                    })
                    .catch(err => console.log(err))
            } else {
                this.err = true
                this.msg = "Nome de usuário não pode ficar vazio."
            }
        },
        editImg () {
            console.log('edit')
        },
        onFileChange (e) {
            const file = e.target.files[0]
            if (file) {
                this.image = URL.createObjectURL(file)
                this.showBackdrop = true
            }
        },
        getCroppedImage () {
            this.croppedImage = this.$refs.cropper.getCroppedCanvas().toDataURL()
            this.showBackdrop = false
        },
        cancelCrop () {
            this.showBackdrop = false
            this.image = null
        }
    }
}
</script>

<style scoped>
button {
    cursor: pointer;
}

.profile {
    margin: 0; padding: 0;
    width: 100%;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
}

.user-form {
    display: flex; flex-direction: row;
    align-items: start; justify-content: start;
}

.image {
    position: relative;
    display: flex;
    justify-content: center; align-items: center;
    width: 150px; height: 150px;
}

.image img, .image label {
    cursor: pointer;
    position: absolute;
    height: 100%; width: 100%;
    border-radius: var(--border-radius);
}

.image label span {
    width: 100%; height: 100%;
    display: flex; flex-direction: row;
    align-items: center;
    justify-content: center;
}

.image input[type="file"] {
    display: none;
}

.image label {
    border: none; display: none;
    background: rgba(0, 0, 0, 0.3);
    color: white;
}

.image:hover label {
    display: block;
}

.modal.hideModal {
    opacity: 0;
}

.modal {
    z-index: 999;
    position: absolute;
    width: 400px; height: 400px;
    top: calc(50% - 200px); left: calc(50% - 200px);
    padding: 50px 0;

    display: flex; flex-direction: column;
    justify-content: space-between; align-content: space-between;

    border-radius: var(--border-radius);
    opacity: 1;
}

.modal .btn {
    margin: auto;
}

.modal .control-buttons {
    display: flex; justify-content: space-evenly;
    align-items: center;
}

.backdrop {
    z-index: 998;
    position: absolute; inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
}

.backdrop.show {
    display: block;
}

.data {
    height: 150px; width: auto;
    display: flex; flex-direction: column;
    justify-content: space-between; align-items: start;
    margin-left: 10px;
}

.data input {
    border: none; border-radius: var(--border-radius);
    padding: 10px 14px; outline: none;
}

.my-podcasts {
    padding: 0 0 50px 0;
    display: grid; justify-content: space-evenly;
    grid-template-rows: 1fr auto;
    grid-template-columns: auto;
    grid-template-areas: 'configs';
    gap: 20px;
}

.podcasts-configs {
    grid-area: configs;
    border-bottom: 1px dashed;
    margin: 0 10px;

    display: flex; justify-content: space-between;
    align-items: center;
}

.podcasts-configs .title {
    font-size: 1.4rem;
}

.msg {
    margin: 20px 0;
    color: darkgreen !important;
}

.msg.err {
    color: brown !important;
}

@media (max-width: 390px) {
    .user-form {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .data {
        justify-content: start; align-items: center;
        height: auto;
    }

    .data input {
        margin: 15px 0;
    }
}

@media (min-width: 760px) {
    .my-podcasts {
        grid-template-columns: auto auto;
        grid-template-areas: 'configs configs';
    }
}

@media (min-width: 1150px) {
    .my-podcasts {
        grid-template-columns: auto auto auto;
        grid-template-areas: 'configs configs configs';
    }
}

@media (min-width: 1540px) {
    .my-podcasts {
        grid-template-columns: auto auto auto auto;
        grid-template-areas: 'configs configs configs configs';
    }
}
</style>