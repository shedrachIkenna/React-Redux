const initState = {
    posts : [
        {id: '1',
        title: "Gunpowder Milkshake",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        },
        {id: '2',
        title: "How to download money from trading forex",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        },
        {id: '3',
        title: "Perfection does'nt exist but we can catch Excellence",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        },
    ]
}

const rootReducer = ((state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter((post) => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts 

        }
    }
    console.log(action)
    return state;
    
}) 

export default rootReducer