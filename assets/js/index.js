// const { add_user } = require("../../server/services/render");

$(add_user).submit(funtion(event){
    alert('Data Inserted successfully.');
});

$(#update_user).submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();

    $.map(unindexed_array, funtion(n, i){
        data[n['name']] = n['value']
    });

    console.log(unindexed_array);

    var request = {
        'url': `http://localhost:3000/api/users/${data.id}?`,
        'method': 'PUT',
        'data': data
    };
    $.ajax(request).done(function(respone){
        alert('Data updated successfully');
    });

});

if(window.location.pathname == '/'){
    $ondelete = $('table tbody td a.delete');
    $ondelete.click(function(){
        var id = $(this).attr('data-id');

        var request = {
            'url': `http://localhost:3000/api/users/${id}?`,
            'method': 'DELETE',
        }

        if(confirm('Do you really want to delete this record?')) {
            $.ajax(request).done(function(response) {
                alert('Data deleted successfully!');
                location.reload();
            });
        }

    });
}









