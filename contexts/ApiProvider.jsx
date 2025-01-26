import React, { createContext, useState, useContext } from 'react';
import {signIn, getFolderId, getSheets, getSheet, log, createSheet} from '../api/apidev';
//import firebaseApp from '../app/firebase';

const ApiContext = createContext();

export function ApiProvider({children}){

    const [isLoading, setIsLoading] = useState(false);
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    const [currentSheet, setCurrentSheet] = useState(null);
    const [sheets, setSheets] = useState([]);

    const api = {
        token: token,
        setToken: setToken,
        userAuthenticated: userAuthenticated,
        currentSheet: currentSheet,
        setCurrentSheet: setCurrentSheet,
        sheets: sheets,
        setSheets: setSheets,

        // sign in, set the token
        signIn: async () => {
            // get the response from google
            let idToken = await signIn();

            setToken(idToken);
            setUserAuthenticated(idToken);

            // set token and other app states
            // console.log("ApiProvider idToken: ")
            // console.log(idToken)

            // ensure the idToken has a value. next step is to call get folder
            return idToken;
        },

        getFolderId: async (token) => {
            let folderId = await getFolderId(token);

            console.log(folderId);
        },

        signOut: async () => {
            setToken(null)
            setUserAuthenticated(false);
            setCurrentSheet(null);
            setSheets([]);

            
        },

        getFolderId: async () => {
            
            return await getFolderId();
        },

        // get all spreadsheets
        getSheets: async () => {
            let sheets = await getSheets();
            if(sheets){
                setSheets(sheets);
                setCurrentSheet(sheets[0]);
                return sheets;
            }
        },
        getSheetApi: () => getSheet(),

        log: async (id, amount, desc, cat) => {
            let data = {
                amount: amount,
                description: desc,
                category: cat
            }
            let response = await log(id, data);
            // update current sheet with the updated sheet
            setCurrentSheet(response.data);
            // update the current sheet within the sheets array

            return response;
        },

        createSheet: async (folderId, title) => {
            let data = {
                folderId: folderId,
                title: title
            };

            let response = await createSheet(data);

            console.log(response)

            setSheets([...sheets, response.data]);
            setCurrentSheet(response.data);
            return response;
        }
    }

    const firebaseApp = {firebaseApp}


    return (
        // <ApiContext.Provider value={{ api, firebaseApp }}>
        <ApiContext.Provider value={{ api }}>
            {children}
      </ApiContext.Provider>
    );
}


export function useApi(){
    const context = useContext(ApiContext);
    if (context === undefined) {
      throw new Error('CustomErroR: useApi must be used within a ApiContext');
    }
    return context;
}

