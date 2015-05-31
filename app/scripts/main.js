      $(document).ready( function(){
        displayList(getList());
        $("#addButton").click(addKitten);
      });

      function addKitten(e) {
        var entry = [];
        entry.name = $("#name").val();
        entry.breed = $("#breed").val();
        entry.age = $("#age").val();
        entry.sex = $("#sex").val();
        entry.description = $("#description").val();
        var list = getList();
        list.push(entry);
        saveList(list);
        displayList(getList());
        e.preventDefault();
      console.log(list);
      }

      function displayList(d){
        $kittenList = $('#kittenList');
        $kittenList.html("");
        $.each(d, function(index, entry){
        $kittenList.append("<div class='col-md-4'><div class='panel-body'><div class='text-center'><img class='thumbnail center-block' src='"+entry.imageUrl+"'+ alt='' height=100 width=100>Name: "+entry.name+"<br>Age: "+entry.age+"<br>Sex: "+entry.sex+"<br>Breed: "+entry.Breed+"<br>"+entry.description+"</div></div></div>");
        });
      }

      function saveList(d) {
        localStorage.setItem('theList', JSON.stringify(d));
      }

      function getList() {
        if (localStorage.getItem('theList') === null){
          return(initList());
        } else {
          return(JSON.parse(localStorage.getItem('theList')));
        }
      }

      function initList(){
        var defaultList = [
          {"name": "Esther", "age": "2 months", "sex":"F", "Breed":"Domestic Short Hair", "imageUrl":"img/Kitten1.jpg", "description": "Esther likes long walks, playing with catnip, and be a snugglebunny"}
         ,{"name": "Garfield", "age": "3 weeks", "sex":"M", "Breed":"Orange", "imageUrl":"img/Kitten2.jpg"}
         ,{"name": "Lilly", "age": "4 months", "sex":"F", "Breed":"Persian", "imageUrl":"img/Kitten3.jpg"}
         ,{"name": "Sam", "age": "6 months", "sex":"M", "Breed":"Whatever", "imageUrl":"img/Kitten3.jpg"}
         ,{"name": "Dwayne", "age": "11 months", "sex":"F", "Breed":"Whatever", "imageUrl":"img/Kitten1.jpg"}
          ];
          return(defaultList);
      }
