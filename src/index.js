import ReactDOM from 'react-dom/client';


// import App from './ex1-class-components/App';
import MenuList from './ex7-props/MenuList';

const root = ReactDOM.createRoot(document.getElementById('root'));


const listOfNames = ["Stålmannen", "Träpojken"];
root.render(<NameListProps names={listOfNames}  />);

const links = [
    {id: 1, name: "lexicon", url:"http://www.lexicon.se"},
    {id:2 , name: 'Oracle', url: 'https://www.oracle.com'},
    {id:3 , name: 'Google', url: 'https://www.google.com'}
]


root.render(<MenuList />);
