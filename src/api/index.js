const appBase =  'https://lab4and5.herokuapp.com/';

export const getList = () => fetch(`${appBase}emp`)
export const getFiles = () => fetch(`${appBase}file`)
export const postEmp = (data) => fetch(`${appBase}add_emp`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
export const deleteEmp = (id) => fetch(`${appBase}delete_emp/${id}`, {
    method: 'DELETE'
})
export const postFile = (data) => fetch(`${appBase}add_file`, {
    method: 'POST',
    body: data
})
