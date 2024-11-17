import axios from 'axios'
import { BASE_URL } from '@env';

const signIn = () => {
    console.log('signing in')

    return {
        token: 'tok3n',
        // signedIn: true
    };
}

const getFolderId = async () => {
    return "teststs";
}

const getSheets = async () => {
//const getSheets = async (folderId) => {    
    // console.log('getSheets')
    // console.log('base_url: ' + BASE_URL)
    const response = await axios.get(`${BASE_URL}/api/test/getsheets?id=whatever`);
    //const response = await axios.get(`${BASE_URL}/api/test/getsheets?id=${folderId}`);

    //console.log(response.data)
    return response.data;
}

const getSheet = async (folderId) => {
    const data = { title: "what 2024", total: "$4,626"}        
    return data;
}

const log = async (id, data) => {
    //console.log(data)
    const response = await axios.post(`${BASE_URL}/api/test/update?id=${id}`, data);
    return response;
}

const createSheet = async (data) => {
    const response = await axios.post(`${BASE_URL}/api/test/create`, data);
    return response;
}

export function categoryList(){
    const data = [
        { category: "Food" , amount: 240}, 
        { category: "Groceries" , amount: 340}, 
        { category: "Health" , amount: 20}, 
        { category: "Transportation" , amount: 241}, 
        { category: "Personal" , amount: 244}, 
        { category: "Entertainment" , amount: 220}, 
        { category: "Utilities" , amount: 244},
        { category: "Pets" , amount: 2210},
        { category: "Something" , amount: 220}, 
        { category: "Somethings" , amount: 244},
        { category: "Something else" , amount: 2210},
    ]
    return data;
}



export function sheetList(){
    const data = [
        { title: "January 2024", total: "$4,626"}, 
        { title: "February 2024", total: "$2,893"}, 
        { title: "Washington Trip", total: "$3,316"}, 
        { title: "Mazda maintenance", total: "$6,785"}, 
        { title: "Mexico Vacation", total: "$4,272"}, 
        { title: "Rental Property", total: "$4,729"}, 
        { title: "March 2024", total: "$7,910"},
        { title: "Thailand 2023", total: "$2,944"},
        { title: "Christmas 2023", total: "$136"}, 
        { title: "Toyota Camper Build", total: "$3,626"},
        { title: "March 2024", total: "$7,784"},
        { title: "Thailand 2023", total: "$3,662"},
        { title: "Christmas 2023", total: "$8,245"}, 
        { title: "Toyota Camper Build", total: "$3,155"},
    ]
    return data;
}

export{signIn, getSheets, getSheet, log, createSheet}