$( document ).ready(function() {

  $("#button").click(searchActorId)
  $("#searchInput").on("keydown",function(e) {
    if (e.which === 13){
      searchActorId()
    }
  })

var searchActorId = function (){
  	var fullName = $("#searchInput").val().toString().replace(/ /g, '+');

  	$.ajax({
			type: 'GET',
			url: `https://api.themoviedb.org/3/search/person?api_key=74d4d78f293267a7e850237f69ff3b2a&query=${fullName}`,
			success: function(data){
				console.log(data.results[0].id)
			}
		})
  	console.log(fullName);
  }

	 $.ajax({
	 	type: 'GET',
	 	url: `http://api.themoviedb.org/3/person/287/combined_credits?api_key=74d4d78f293267a7e850237f69ff3b2a`,
	 	success: function(data){
	 		for (var i = 0; i < data.cast.length; i++){
	 			console.log(data.cast[i].title)
	 		}
	 	}
	 })

});

