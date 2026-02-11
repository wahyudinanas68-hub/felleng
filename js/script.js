function cariFilm() {
    $('#movie-list').html('');

    $.ajax({
        url : 'https://omdbapi.com',
        type : 'get',
        dataType : 'json',
        data : {

            'apikey': 'b2696f06',
            's': $('#search-input').val()
        },
        success : function(result) {
            if (result.Response == "True"){
                let film = result.Search;
                $.each(film, function (i, data){

                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                                <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id=`+ data.imdbID +`>Detail</a>
                            </div>
                        </div>
                    </div>
                    `);


                });

                $('#search-input').val('');

            } else {
                $('#movie-list').html(`
                <div class = "col">
                <h1 class = "text-center">`+ result.Error +`</h1>
                </div>`)
                
            }

        }


    });


}

$('#search-button').on('click', function(){

cariFilm();
    
});

$('#search-input').on('keyup', function(e){

    if (e.keyCode === 13){

        cariFilm(); 

    }
        
});

$('#movie-list').on('click', '.see-detail', function(){

    $.ajax({
        url: 'http://omdbapi.com',
        dataType: 'json',
        type: 'get',
        data: {
            'apikey': 'b2696f06',
            'i': $(this).data('id')
        },
        success: function (movi){

            if (movi.Response == "True"){

                $('.modal-body').html(`
                
                <div class="container-fluid">
                    <div class="row">
                        
                    <div class="col-md-4">
                    <img src=`+ movi.Poster +` class="img-fluid" >
                    </div>
                    <div class="col-md-8">
                        <ul class="list-group">
                            <li class="list-group-item"><h3>`+ movi.Title +`</h3></li>
                            <li class="list-group-item">Released  :  `+ movi.Released +`</li>
                            <li class="list-group-item">Genre  :  `+ movi.Genre +`</li>
                            <li class="list-group-item">Director  :  `+ movi.Director +`</li>
                            <li class="list-group-item">Actors  :  `+ movi.Actors +`</li>
                            <li class="list-group-item">Writer  :  `+ movi.Writer +`</li>
                        </ul>
                    </div>


                    </div>

                </div>
                
                
                `);
            }


        }


    });

});