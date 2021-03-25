const appBase =  'https://lab4and5.herokuapp.com/';

export const getList = () => fetch(`${appBase}emp`)
export const getFiles = () => fetch(`${appBase}file`)
export const postEmp = (data) => fetch(`${appBase}add_emp`, {
    method: 'POST',
    body: JSON.stringify(data)
})
export const postFile = (data) => fetch(`${appBase}add_file`, {
    method: 'POST',
    body: data
})
