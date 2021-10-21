<template>

<div>
    <p>First Vue component</p>
    <p v-if="condition">This message will not shown</p>
    <p>This message WILL shown</p>
</div>
    
    
</template>

<script>
export default {
    name: "FirstComponent",
    data: () => ({
        condition: false
    })
};
</script>

<style lang="scss" scoped>

</style>