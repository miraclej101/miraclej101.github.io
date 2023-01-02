export interface Certificate{
    id?: number;
    name:string;
    platform:string;
    url:string;
    date:string;
}

export const CERTIFICATE : Certificate[] = [
    {
        id: 1,
        name:'Introduction to Front-End Development',
        platform:'Cousera-Meta',
        url:'https://www.coursera.org/account/accomplishments/certificate/XSUK8LXTUTBH',
        date:'07/2022',
    },
    {
        id: 2,
        name:'Programming with JavaScript',
        platform:'Cousera-Meta',
        url:'https://www.coursera.org/account/accomplishments/certificate/HFZ3G5NGCDPH',
        date:'07/2022',
    },
    {
        id: 3,
        name:'Programming in Python',
        platform:'Cousera-Meta',
        url:'https://www.coursera.org/account/accomplishments/certificate/W5FXAMFQNX2D',
        date:'07/2022',
    },
    {
        id: 4,
        name:'Data Analyst in Power BI Track',
        platform:'DataCamp',
        url:'https://www.datacamp.com/statement-of-accomplishment/track/4ff60b7bc769ddbfd01459ea09adb903c841da57',
        date:'07/2022',
    },
    {
        id: 5,
        name:'Spreadsheet Fundamentals Track',
        platform:'DataCamp',
        url:'https://www.datacamp.com/statement-of-accomplishment/track/e7fb7e8faea0cb7ed50a79b1ec0117e4cc2a39f4',
        date:'07/2022',
    },
    {
        id: 6,
        name:'AWS Cloud Practitioner Essentials',
        platform:'Cousera',
        url:'https://www.coursera.org/account/accomplishments/certificate/6YKNT36LFEH3',
        date:'08/2022',
    },
    {
        id: 7,
        name:'Data Manipulation with pandas',
        platform:'DataCamp',
        url:'https://www.datacamp.com/statement-of-accomplishment/course/65271e38afb5fe117bb377ce0c1a21c1d649bfdf',
        date:'08/2022',
    },
    {
        id: 8,
        name:'Prepare Data for Exploration',
        platform:'Coursera-Google',
        url:'https://www.coursera.org/account/accomplishments/certificate/5LVRNLUCHNXR',
        date:'08/2022',
    },
    {
        id: 9,
        name:'Analyze Data to Answer Questions',
        platform:'Coursera-Google',
        url:'https://www.coursera.org/account/accomplishments/certificate/M5EZFTHCPUSP',
        date:'09/2022',
    }

]