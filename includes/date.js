function range(start_date="20240901",end_date="20240917"){
    return `_table_suffix between "${start_date}" and "${end_date}"`
}

module.exports = {range};