import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
    return (
       <div className='ui container'>
            <BrowserRouter>
                <Header />
                <div>
                    <Route path='/' exact component={StreamList}/>
                    <Route path='/stream/create' exact component={StreamCreate}/>
                    <Route path='/stream/delete'  component={StreamDelete}/>
                    <Route path='/stream/edit'  component={StreamEdit}/>
                    <Route path='/stream/show'  component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;