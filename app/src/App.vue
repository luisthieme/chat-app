<template>
    <div class="content">
        <h1>Chat App</h1>
        <FormKit class="form" type="form" @submit="sendMessage" actions-class="submit" input-class="button">
            <FormKit type="text" v-model="message" wrapper-class="$remove:formkit-wrapper input" />
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
h1 {
    font-family: sans-serif;
    width: fit-content;
    margin: auto;
    padding-bottom: 24px;
}
.content {
    width: 80%;
    max-width: 900px;
    margin: auto;
}

.form {
    margin: auto;
}

.input {
    width: 80%;
    margin: auto;
}

.submit {
    width: fit-content;
    margin: auto;
}

.button {
    margin: 0px;
}
.messages {
    font-size: 16px;
    list-style-type: none;
    width: fit-content;
    margin: auto;
    border: 1px;
    border-radius: 8px;
    padding: 8px;
    border-style: solid;
    background-color: rgba(233, 233, 233, 5);
    border-color: rgb(150, 150, 150);
    font-family: sans-serif;
}

ul {
    padding: 0px;
}
</style>
