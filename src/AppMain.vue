<script>
export default {
    name: 'AppMain'
}
</script>

<template lang="">
    <main>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
    </main>
</template>

<style lang="scss" scoped>
main {
    max-width: 1200px;
    margin: 30px auto;
    background-color: white;
    display: flex;
    flex-wrap: wrap;

    .card {
        width: calc(100% / 5 - 10px);
        margin: 5px;
        background-color: orange;
        height: 300px;

    }

}
</style>