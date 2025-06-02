
const formatDate = (dateString:string) =>{

    const date = new Date(dateString)

    return date.toLocaleString('en-Us',{
        year:'numeric',
        month:'short',
        day:'numeric'
    })
}

export default formatDate