import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const usernameSlice = createSlice({
	name: 'username',
    initialState: "",
    reducers: {
        setUsername : (state, action) => {
            return action.payload
        }
    }
})

export const { setUsername } = usernameSlice.actions;

export default usernameSlice.reducer;