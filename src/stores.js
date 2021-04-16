import {
    writable
} from 'svelte/store'

const createTodos = () => {

    const {
        subscribe,
        set,
        update
    } = writable([])

    return {
        subscribe,
        local: (todos) => {
            set(todos)
        },
        add: todo => {
            update(todos => todos = [...todos, todo])
        },
        delete: id => {
            update(todos => todos = todos.filter((item) => item.id !== id))
        },
        put: id => {
            update(todos => todos = todos.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        estado: !item.estado,
                    };
                } else {
                    return item;
                }
            }))
        }
    }

}

export const todos = createTodos()

const createOpc = () => {
    const {
        subscribe,
        set,
        update
    } = writable({texto: '', color: '', estado: false})

    return {
        subscribe,
        mostrar: (opciones) => {
            update(n => n = opciones)
        }
    }
}

export const opc = createOpc()