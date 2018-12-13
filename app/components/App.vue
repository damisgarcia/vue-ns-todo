<template>
    <Page>
        <ActionBar :title="title" class="action-bar"/>
        <TabView :tabBackgroundColor="tabBgColor" :tabTextColor="tabColor" :selectedTabTextColor="tabColor" :androidSelectedTabHighlightColor="tabColor" height="100%">
            <TabViewItem title="To Do">
                <StackLayout orientation="vertical" width="100%" height="100%">
                    <GridLayout columns="*" rows="*" width="100%" height="64">
                        <TextField col="0" row="0" v-model="$store.state.todos.newTodo" hint="Type new task..." editable="true" @returnPress="onButtonTap" returnKeyType="done" />
                    </GridLayout>

                    <ListView class="list-group" for="todo in todos.todos" @itemTap="onItemTap">
                        <v-template>
                            <Label :text="todo.name" class="list-group-item" textWrap="true" />
                        </v-template>
                    </ListView>
                    <Button text="Vuex" @tap="toCounter" />
                </StackLayout>
            </TabViewItem>
            
            <TabViewItem title="Completed">
                <StackLayout orientation="vertical" width="100%" height="100%">
                    <ListView class="list-group" for="done in todos.dones" @itemTap="onItemDoneTap">
                        <v-template>
                            <Label :text="done.name" class="list-group-item" textWrap="true" />
                        </v-template>
                    </ListView>
                </StackLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
import { mapState } from "vuex"

import CounterView from "./Counter"

const platform = require("platform")

export default {
    computed: {
        ...mapState(['todos'])
    },
    methods: {
        onItemTap(args){
            action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
            .then(result => {
                switch (result) {
                    case 'Delete forever':
                        this.$store.dispatch("todos/removeTodo", args.index)
                        break;
                    case 'Mark completed':
                        this.$store.dispatch("todos/moveDone", args.index)
                    case 'Cancel' || undefined:
                        break;
                }
            })
        },
        onItemDoneTap(args){
            action('What do you want to do with this task?', 'Cancel', ['Mark Todo', 'Delete forever'])
            .then(result => {
                switch (result) {
                    case 'Delete forever':
                        this.$store.dispatch("todos/removeDone", args.index)
                        break;
                    case 'Mark Todo':
                        this.$store.dispatch("todos/moveTodo", args.index)
                    case 'Cancel' || undefined:
                        break;
                }
            })
        },
        onButtonTap(){
            this.$store.dispatch("todos/addTodo", this.textFieldValue)       
        },
        toCounter(){
            this.$navigateTo(CounterView)
        }
    },
    data() {
      return {
        tabBgColor: defineTabBgColor(),
        tabColor: defineTabColor(),
        title: 'Todo list with Vue',
      }
    }
}

function defineTabBgColor(){ return platform.isAndroid ? "#53ba82" : undefined }
function defineTabColor(){ return platform.isAndroid ? "#ffffff" : undefined }  

</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .list-group-item{
        padding: 24px;
    }
</style>
