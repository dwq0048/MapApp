<template>
    <div class="error_page">
        <h1>인터넷 연결좀</h1>
    </div>
</template>

<script>
export default {
    name : "403"
}
</script>

<style lang="scss" scoped>
    .error_page{
        & > h1 {
            & {
                font-size: #{$font-size + 10};
            }
        }
    }
</style>
