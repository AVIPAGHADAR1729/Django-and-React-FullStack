// import { Paper, TextField } from '@material-ui/core'




// function SearchBar() {



//     return (
//         <Paper elevation={6} style={{ padding: '25px' }}>
//             <form onSubmit={handleSubmit}>
//                 <TextField fullWidth label="Search..." onChange={handleChange}>

//                 </TextField>
//             </form>
//         </Paper>
//     )
// }


// function handleSubmit() {

// }

// function handleChange(e) {
//     console.log(e.target.value)
// }

// export default SearchBar;

import React from 'react';
import { Paper, TextField } from '@material-ui/core'




class SearchBar extends React.Component {
    state = {
        input: ''
    }
    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({ input: e.target.value })
    }
    handleSubmit = (e) => {
        const { searchText } = this.state
        const { onSubmitForm } = this.props
        onSubmitForm(searchText)
        e.preventDefault();


    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '15px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}>

                    </TextField>
                </form>
            </Paper>
        )
    }
}


export default SearchBar;
