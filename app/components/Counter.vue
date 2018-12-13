<template>
    <Page>
        <ActionBar title="Eiusmod elit mollit quis" class="action-bar">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <StackLayout orientation="vertical" width="100%" height="100%">
            <Label :text="count" class="counter" />
            <FlexboxLayout class="counter-control">
                <Button @tap="increment" text="+" />
                <Button @tap="decrement" text="-" />
            </FlexboxLayout >
        </StackLayout>
    </Page>
</template>
<script>
export default {
    computed: {
        count(){
            return this.$store.state.count
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        decrement() {
            this.$store.commit('decrement')
        }
    }
}
</script>
<style>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    .counter{
        font-size: 48px;
        padding: 48px 8px;
        text-align: center;
    }
    .counter-control{
        flex: 1;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
</style>
