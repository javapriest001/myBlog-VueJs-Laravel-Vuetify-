<template>
    <div>
        <v-dialog
            max-width="750"
            persistent

        >

            <template v-slot:activator="{on}">
                <v-btn
                    slot="activator"
                    text
                    v-on="on"
                >ADD NEW BLOG<v-icon right>mdi-text-box-plus</v-icon></v-btn>
            </template>
            <v-card>

            </v-card>
            <v-card class="">
                <quillEditor
                    v-model="content"
                    :options="editorOption"
                    ref="myQuillEditor"
                />
<!--                <Editor ref="editor" :config="{-->
<!--                tools: {-->
<!--                  header: require('@editorjs/header'),-->
<!--                  list: require('@editorjs/list'),-->
<!--                  linktool: require('@editorjs/link'),-->
<!--                  code: require('@editorjs/code'),-->
<!--                  personality: require('@editorjs/personality'),-->
<!--                  embed: require('@editorjs/embed'),-->
<!--                  marker: require('@editorjs/marker'),-->
<!--                  table: require('@editorjs/table'),-->
<!--                  delimiter: require('@editorjs/delimiter'),-->
<!--                  quote: require('@editorjs/quote'),-->
<!--                  image: require('@editorjs/image'),-->
<!--                    warning: require('@editorjs/warning'),-->
<!--                    paragraph: require('@editorjs/paragraph'),-->
<!--                    checklist: require('@editorjs/checklist')-->
<!--                }-->
<!--    }"          />-->


<!--                <button @click="invokeSave">Save</button>-->
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {bus} from "../../../app.js"
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
    name: "addBlogPopUp",
    components: {
        quillEditor,
    },

    data(){
        return {
            content: ' ',
            editorOption: {
                // Some Quill options...
                placeholder: 'Start a new blog post',
                debug: 'info',
                readOnly: true,
                theme: 'snow'
            },
            delta: undefined,
        }
    },
    watch:{
      content(val){
          this.delta = this.$refs.myQuillEditor.quill.getContents()
          console.log(this.delta)
      }
    },
    methods: {

    }

}



</script>

<style scoped>

</style>

