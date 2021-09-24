import React from 'react'

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = React.useReducer(reducer, defaultValue)

        // Allow all actions passed to createDataContext to have access to dispatch
        const boundActions = {}
        for(let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            // Data being provided is the state of the Context created and the actions we coded to change the state
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}