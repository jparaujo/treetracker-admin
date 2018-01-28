//created 1-27-2018 iremaka
 
    var table7 = $('#table7').DataTable();



    function table7cb(updatedCell, updatedRow, oldValue) {
        
        //console.log("The new value for the cell is: " + updatedCell.data());
        //console.log("The values for each cell in that row are: " + updatedRow.data());
        var column =  updatedCell[0][0].column;
        var row =  updatedCell[0][0].row;
        var dapi = $("#table7 thead > tr > th").eq(column).data("api");
        if(!dapi)
        { 
           var err7 = "ERR table7_data-api_1: this column is not configured correctly for editing";
           console.log(err7);
           alert(err7);
        }
        else
        {
          //console.log("data-api value");
          //console.log(dapi);
          var data7 = {};

          var dBool = {};
          //dBool = {"priority":1}
          var dFloat = {"lat":1,"lon":1}
          var dInt = {"id":1,"dead":1}

          if(dBool[dapi])
          {
             data7[dapi] = updatedCell.data();
             (data7[dapi] == "true" ? data7[dapi] = true : data7[dapi] = false);
          }
          else if(dFloat[dapi])
          {
             //data7[dapi] = parseFloat(updatedCell.data()).toFixed(9);
             data7[dapi] = parseFloat(updatedCell.data());
          }
          else if(dInt[dapi])
          {
             data7[dapi] = parseInt(updatedCell.data());
          }
          else
          {
             data7[dapi] = updatedCell.data();
          }


          var rowData = table7.rows( row ).data();
          var zid = parseInt(rowData[0]);

          //console.log("ZID");
          //console.log(zid);

          data7["id"] = parseInt(zid);

          //console.log("data7");
          //console.log(data7);

          var data7j = JSON.stringify(data7);

          //console.log("data7j");
          //console.log(data7j);

            
	    var request = $.ajax({
	      url: "/api/trees",
	      method: "PUT",
	      data: data7j,
              dataType: "json",
              contentType: "application/json; charset=utf-8"
	    });
	     
	    request.done(function( msg ) {
	      //console.log( msg );
              //console.log (msg);
              var succ7 = "SUCCESS table7_data-api_7: changed " + dapi + " from " + oldValue + " to " + updatedCell.data();
              console.log("msg");
              console.log(msg);
              console.log("success_message");
              console.log(succ7);
              alert(succ7);

	    });
	     
	    request.fail(function( jqXHR, textStatus ) {
              var err8 = "ERR table7_data-api_2 -> Request failed: " + textStatus;            
	      console.log( err8 );
              alert(err8);
	    });
            
          
        }


    }

    table7.MakeCellsEditable({
        "onUpdate": table7cb,
        "inputCss":'',
        "columns": [3,4,5,6],
        "allowNulls": {
        },
        "confirmationButton": { 
            "confirmCss": '',
            "cancelCss": ''
        },
		"inputTypes":
                [

                   {
                      "column":3, 
                      "type": "list",
                      "options":
                       [
                          { "value": "TRUE", "display": "TRUE" },
                          { "value": "FALSE", "display": "FALSE" }
                       ]
                   },
                   {
				"column":4, 
				"type":"number",
                                "step":"0.000000001", 
				"options":null 
                   }, 
                   {
				"column":5, 
				"type":"number", 
                                "step":"0.000000001", 
				"options":null 
                   }, 
                   {
				"column":6, 
				"type":"number", 
				"options":null 
                   }

                ]
    });
