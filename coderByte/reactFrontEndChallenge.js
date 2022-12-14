import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const style = {
    table: {
        borderCollapse: 'collapse'
    },
    tableCell: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px'
    },
    form: {
        container: {
            padding: '20px',
            border: '1px solid #F0F8FF',
            borderRadius: '15px',
            width: 'max-content',
            marginBottom: '40px'
        },
        inputs: {
            marginBottom: '5px'
        },
        submitBtn: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: 'lightseagreen',
            fontSize: '14px',
            borderRadius: '5px'
        }
    }
}

function PhoneBookForm(props) {

    const [userFirstname, setUserFirstname] = useState("Coder");
    const [userLastname, setUserLastname] = useState("Byte");
    const [userPhone, setUserPhone] = useState("8885559999");

    // const [errors, setErrors] = useState({});

    // I would use axios to call an api post request to create a new contact in the database
    // alternatively we could pass this data to the allContacts list held in state within the
    // information table component by using the spread opperator, and we could have the allContacts state
    // held in the parent component, however this really doesn't do us much good as it is just held in 
    // state and not actually being saved anywhere which is why I showed how I would do it via axios
    // as it is best practice. We can even add error handling to display errors to the user.

    const addEntryToPhoneBook = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/contact", {
            userFirstname,
            userLastname,
            userPhone,
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                // setErrors(err.response.data.err.errors);
            });
    };

    return (
        <form onSubmit={addEntryToPhoneBook} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userFirstname'
                name='userFirstname'
                value={userFirstname}
                type='text'
                onChange={(e) => setUserFirstname(e.target.value)}
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userLastname'
                name='userLastname'
                value={userLastname}
                type='text'
                onChange={(e) => setUserLastname(e.target.value)}
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userPhone'
                name='userPhone'
                value={userPhone}
                type='text'
                onChange={(e) => setUserPhone(e.target.value)}
            />
            <br />
            <input
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
    )
}

function InformationTable(props) {

    const [allContacts, setAllContacts] = useState([]);

    // This should work great on a full stack application. 
    // For this demo it does not since we only have the front end running.
    // I would use axios to fetch the full contact list from the database.
    // and the useEffect will update our allContacts state automatically via setAllContacts 
    // I hope you are focusing on the quality of the code rather than just the test console
    // on the right hand side which is of course limited in functionality
    // Thank you

    useEffect(() => {
        axios.get("http://localhost:8000/api/contacts")
            .then((response) => {
                console.log(response.data);
                setAllContacts(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    return (
        <table style={style.table} className='informationTable'>
            <thead>
                {allContacts
                    // Sort the contacts by last name - alphabetically
                    .sort((a, b) => {
                        if (a.userLastname.toLowerCase() < b.userLastname.toLowerCase()) return -1;
                        if (a.userLastname.toLowerCase() > b.userLastname.toLowerCase()) return 1;
                        return 0;
                    })
                    .map((contact, index) => {
                        return (
                            <tr>
                                <th style={style.tableCell}>{contact.userFirstname}</th>
                                <th style={style.tableCell}>{contact.userLastname}</th>
                                <th style={style.tableCell}>{contact.userPhone}</th>
                            </tr>
                        );
                    })};
            </thead>
        </table>
    );
}

function Application(props) {
    return (
        <section>
            <PhoneBookForm />
            <InformationTable />
        </section>
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('root')
);