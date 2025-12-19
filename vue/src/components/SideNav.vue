<!-- components/SideNav.vue -->
<template>
    <div class="route">
        <div v-for="section in sections" :key="section.id" class="link"
            :class="{ active: activeSection === section.id }" @click="onNavigate(section.id)">
            {{ section.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    sections: { id: string; name: string }[]
    activeSection: string
}>()

const emit = defineEmits<{
    (e: 'navigate', id: string): void
}>()

const onNavigate = (id: string) => {
    emit('navigate', id)
}
</script>

<style scoped>
.route {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.link {
    position: relative;
    width: 80%;
    display: block;
    font-size: clamp(1.8rem, 6vw, 8rem);
    font-weight: 1000;
    color: #000000;
    transition: all 0.2s ease;
    cursor: pointer;
}

.link::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 50%;
    width: 0;
    height: 5px;
    background-color: #1cb198;
    transition: all 0.4s ease;
    transform: translateX(-50%);
}

.link:hover {
    color: #ffffff;
    background-color: #000000;
}

.link:hover::after {
    width: 50%;
}

.link.active {
    color: #1cb198;
    background-color: #fefefe;
}

.link.active::after {
    width: 50%;
}
</style>