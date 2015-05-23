console.log('\'Allo \'Allo!');

      $(document).ready( function(){
        displayList(getList());
        $("#addButton").click(addKitten);
      });

      function addKitten(e) {
        var entry = {};
        entry.kitten = $("#kitten").val();
        entry.description = $("#description").val();
        var list = getList();
        List.push(entry);
        saveList(list);
        displayList(getList());
        e.preventDefault();
      }

      function displayList(d){
        $kittenList = $('#kittenList');
        $kittenList.html("");
        $.each(d, function(index, entry){
          $kittenList.append();
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
          ];
          return(defaultList);
      }
