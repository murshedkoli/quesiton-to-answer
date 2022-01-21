import React from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons'



const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'avater', headerName: 'Profile', width: 200, renderCell: (params) => {
            return (
                <div className='userListImg'>
                    <img src={params.row.avater} alt="user" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email Id', width: 200 },
    { field: 'questions', headerName: 'Questions', width: 200 },
    { field: 'answered', headerName: 'Answered', width: 200 },
    {
        field: 'actions', headerName: 'Actions', width: 300, renderCell: (params) => {
            return (
                <>
                    <button className="userListEdit">Edit</button>
                    <DeleteOutline className='userListDeleteButton' />
                </>
            )
        }
    },

];

const rows = [
    { id: 1, avater: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png', username: 'Murshedkoli', email: 'murshedkoli@gmail.com', questions: 35, answered: 20 },
    { id: 2, avater: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png', username: 'Murshedkoli', email: 'murshedkoli@gmail.com', questions: 35, answered: 20 },
    { id: 3, avater: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png', username: 'Murshedkoli', email: 'murshedkoli@gmail.com', questions: 35, answered: 20 },
    { id: 4, avater: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png', username: 'Murshedkoli', email: 'murshedkoli@gmail.com', questions: 35, answered: 20 },
    { id: 5, avater: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png', username: 'Murshedkoli', email: 'murshedkoli@gmail.com', questions: 35, answered: 20 },
    { id: 6, avater: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png', username: 'Murshedkoli', email: 'murshedkoli@gmail.com', questions: 35, answered: 20 },
    { id: 7, avater: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png', username: 'Murshedkoli', email: 'murshedkoli@gmail.com', questions: 35, answered: 20 },
    { id: 8, avater: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png', username: 'Murshedkoli', email: 'murshedkoli@gmail.com', questions: 35, answered: 20 },
    { id: 9, avater: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png', username: 'Murshedkoli', email: 'murshedkoli@gmail.com', questions: 35, answered: 20 },

];



export default function UserList() {
    return (
        <div className='userList'>
            <div style={{ height: '90vh', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}

                    disableSelectionOnClick
                    checkboxSelection
                />
            </div>
        </div>
    )
}
