"test_20240918"
function create(default_date){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy+mm+dd;
    if(default_date) today = default_date;
    var table_name = `analytics_262445815.session_sharded_${today}`;
    return `${table_name}`;
}
module.exports = {create};