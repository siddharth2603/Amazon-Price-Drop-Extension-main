console.log("Hey there");

var data="abc";
       $.ajax({
            type: "GET",
            url: "XYZ",
            data: {
                "data":data,
            },
            dataType: "json",

            //if received a response from the server
            success: function( datas, textStatus, jqXHR) {

            },

            //If there was no resonse from the server
            error: function(jqXHR, textStatus, errorThrown){

            },

            //capture the request before it was sent to server
            beforeSend: function(jqXHR, settings){

            },

            //this is called after the response or error functions are finished
            //so that we can take some action
            complete: function(jqXHR, textStatus){

            }

        });
