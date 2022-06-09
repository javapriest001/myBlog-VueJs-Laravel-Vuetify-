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
                <Editor ref="editor" :config="{
                tools: {
                  header: require('@editorjs/header'),
                  list: require('@editorjs/list'),
                  linktool: require('@editorjs/link'),
                  code: require('@editorjs/code'),
                  personality: require('@editorjs/personality'),
                  embed: require('@editorjs/embed'),
                  marker: require('@editorjs/marker'),
                  table: require('@editorjs/table'),
                  delimiter: require('@editorjs/delimiter'),
                  quote: require('@editorjs/quote'),
                  image: require('@editorjs/image'),
                    warning: require('@editorjs/warning'),
                    paragraph: require('@editorjs/paragraph'),
                    checklist: require('@editorjs/checklist')
                }
    }"          />


                <button @click="invokeSave">Save</button>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {bus} from "../../../app.js"
export default {
    name: "addBlogPopUp",
    components: {},

    data(){
        return {
            config: {

                tools: {

                },





                image: {
                    // Like in https://github.com/editor-js/image#config-params
                    endpoints: {
                        byFile: 'http://localhost:8090/image',
                        byUrl: 'http://localhost:8090/image-by-url',
                    },
                    field: 'image',
                    types: 'image/*',
                },
            }
        }
    },
    methods: {
        invokeSave() {
            this.$refs.editor._data.state.editor.save()
                .then((data) => {
                    // Do what you want with the data here
                    console.log(data)
                })
                .catch(err => { console.log(err) })
        }
    }

}



</script>

<style scoped>

</style>

