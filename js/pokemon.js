$(document).on("click","#addPokemon",function() {
	/*var ID = $("#pokemonID").val();    
	var Name = $("#pokemonName").val();    
	var Type = $("#pokemonType").val();    
	var BuddyDistance = $("#pokemonBuddyDistance").val();    */


   /* $.ajax({ 
		url: "https://api.mlab.com/api/1/databases/heroku_ks1zft5f/collections/pokemon?apiKey=iaPcJHCCnxh5wLkggagqjjS6G1hjKIoQ",
		data: JSON.stringify( 
			{ "ID" : ID, "Name" : Name, "Type" : Type, "BuddyDistance" : BuddyDistance } 
		),
		type: "POST",
		contentType: "application/json" 
	});*/


/*	$("#pokemonID").val(ID + 1);
	$("#pokemonName").empty();
	$("#pokemonType").empty();
	$("#pokemonBuddyDistance").empty();*/


	$.ajax({
	    url: "https://api.mlab.com/api/1/databases/heroku_ks1zft5f/collections/pokemon?apiKey=iaPcJHCCnxh5wLkggagqjjS6G1hjKIoQ",
	    data: { name: name },
	    type: "GET",
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function (data) {
	        $.each(data, function(index, values) {
			      var tr="<tr>";
			      var pID=values.id;
			       $.each(values, function(i,v){
			       		if(i != "_id"){
			       			tr= tr+ "<td class='" + i +"'><input class='edit_" + i + "' value='"+v+"'</td>";
			       		}
			       });
			        tr= tr+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='editPokemon' data-id='" + pID + "'>Edit Pokemon</button></tr>";
			      $("#pokemonTable").append(tr);
			  });
	    },
	    error: function (data) {
	        
	    },
	    async: false
	});

});