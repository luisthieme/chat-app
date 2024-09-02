<template>
    <div class="content">
        <FormKit type="form" @submit="sendMessage">
            <FormKit type="text" v-model="message" />
        </FormKit>
        <ul>
            <li class="messages" v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
        </ul>
    </div>
</template>

<script>
import { FormKit } from '@formkit/vue';
import { io } from 'socket.io-client';

export default {
    name: 'App',
    components: {
        FormKit,
    },
    data() {
        return {
            socket: null,
            message: '',
            messages: [],
        };
    },
    mounted() {
        this.socket = io('ws://localhost:3500');

        this.socket.on('message', (data) => {
            this.messages.push(data);
        });
    },
    methods: {
        sendMessage() {
            // e.preventDefault();
            if (this.message) {
                this.socket.emit('message', this.message);
                this.message = '';
            }
        },
    },
};
</script>

<style>
.content {
    width: fit-content;
    margin: auto;
}

.messages {
    font-size: 24px;

    font-family: sans-serif;
}
</style>
