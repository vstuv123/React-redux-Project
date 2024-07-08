import { configureStore} from '@reduxjs/toolkit'
import itemsSlice from './itemSlice';
import fetchDataSlice from './fetchStatusSlice';
import bagCartSlice from './bagCartSlice'

const myntraStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: fetchDataSlice.reducer,
        bag: bagCartSlice.reducer,
    }
})

export default myntraStore;

