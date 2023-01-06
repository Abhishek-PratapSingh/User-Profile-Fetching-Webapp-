import {configureStore} from '@reduxjs/toolkit'
import userReducer1 from './allUsers'
import userReducer2 from './singleUser'

export default configureStore ({
   
    reducer : {
       users : userReducer1,
       singleUser: userReducer2 
    }
    
});