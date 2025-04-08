"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateStatsTable = todos => {
        const totalTodos = todos.length;
        const completedTask = todos.filter(todo => todo.completed).length
        const inCompletedTask = totalTodos - completedTask
        const completeRatio = completedTask / totalTodos *100
        return `
            <tr>
                <td>total todos:</td>
                <td>${totalTodos}</td>
            </tr>
            <tr>
                <td>total completed todos:</td>
                <td>${completedTask}</td>
            </tr>
            <tr>
                <td>total Incompleted todos:</td>
                <td>${inCompletedTask}</td>
            </tr>
            <tr>
                <td>complete Ratio:</td>
                <td>${completeRatio}%</td>
            </tr>
        `
    }


    const generateUserTable = todos => {
        const result = todos.reduce((cumulative, current) => {
            
            
        }, [])
            
    }

    const generateTodosTable = todos => {
        const newHTML = todos
            .map(todo => {
                const { userId, title, completed } = todo // deconstruction
                return `
                    <tr>
                        <td>${userId}</td>
                        <td>${title}</td>
                        <td>${completed ? 'Yes' : 'No'}</td>
                    </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderTodosTable = newHTML => document.getElementById('todos').innerHTML = newHTML

    const renderStatsTable = newHTML => document.getElementById('stats').innerHTML = newHTML

    const renderUserTable = newHTML => document.getElementById('users').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const todos = await getData('https://jsonplaceholder.typicode.com/todos')

            // generate html
            const todosTableHTML = generateTodosTable(todos)
            const statsTableHTML = generateStatsTable(todos)
            const userTableHTML = generateUserTable(todos)

            // render html
            renderTodosTable(todosTableHTML)
            renderStatsTable(statsTableHTML)
            renderUserTable(userTableHTML)
        } catch (e) {
            console.warn(e)
        }
    })

})()


