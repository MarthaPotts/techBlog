//handlebars helpers go in here 
module.exports = {
    format_date: date => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`; 
    }
}; 
