angular.module('shopListApp')

.controller('mainCtrl', function($scope) {})

.controller('newListCtrl', function($scope, Lists) {
    $scope.lists = Lists;

    $scope.list = {
        name: "",
        items: [],
    };

    $scope.vegetables = [
        { name: "Abóbora", checked: false },
        { name: "Abobrinha", checked: false },
        { name: "Agrião", checked: false },
        { name: "Alecrim", checked: false },
        { name: "Alface", checked: false },
        { name: "Alho", checked: false },
        { name: "Batata", checked: false },
        { name: "Beringela", checked: false },
        { name: "Beterraba", checked: false },
        { name: "Brócolis", checked: false },
        { name: "Cebola", checked: false },
        { name: "Cenoura", checked: false },
        { name: "Chuchu", checked: false },
        { name: "Coentro", checked: false },
        { name: "Couve", checked: false },
        { name: "Couve-flor", checked: false },
        { name: "Espinafre", checked: false },
        { name: "Inhame", checked: false },
        { name: "Louro", checked: false },
        { name: "Mandioca", checked: false },
        { name: "Milho", checked: false },
        { name: "Nabo", checked: false },
        { name: "Palmito", checked: false },
        { name: "Pepino", checked: false },
        { name: "Quiabo", checked: false },
        { name: "Rabanete", checked: false },
        { name: "Repolho", checked: false },
        { name: "Rúcula", checked: false },
        { name: "Salsinha", checked: false },
        { name: "Tomate", checked: false },
        { name: "Vagem", checked: false }
    ];

    $scope.fruits = [
        { name: "Abacate", checked: false },
        { name: "Abacaxi", checked: false },
        { name: "Acerola", checked: false },
        { name: "Ameixa", checked: false },
        { name: "Banana", checked: false },
        { name: "Caju", checked: false },
        { name: "Coco", checked: false },
        { name: "Goiaba", checked: false },
        { name: "Kiwi", checked: false },
        { name: "Laranja", checked: false },
        { name: "Limão", checked: false },
        { name: "Maçã", checked: false },
        { name: "Mamão", checked: false },
        { name: "Manga", checked: false },
        { name: "Maracujá", checked: false },
        { name: "Melancia", checked: false }
        { name: "Melão", checked: false },
        { name: "Morango", checked: false },
        { name: "Pêra", checked: false },
        { name: "Pêssego", checked: false },
        { name: "Tangerina", checked: false },
        { name: "Uva", checked: false }
    ];

    $scope.others = [
        { name: "Amêndoas", checked: false },
        { name: "Amendoim", checked: false },
        { name: "Arroz", checked: false },
        { name: "Aveia", checked: false },
        { name: "Café", checked: false },
        { name: "Castanha", checked: false },
        { name: "Cogumelo", checked: false },
        { name: "Ervas finas", checked: false },
        { name: "Ervilha", checked: false },
        { name: "Farinha", checked: false },
        { name: "Feijão", checked: false }
        { name: "Mel", checked: false },
        { name: "Ovo", checked: false },
        { name: "Pimenta", checked: false },
        { name: "Sal", checked: false },
        { name: "Soja", checked: false },
        { name: "Trigo", checked: false }
    ];

    $scope.addItemClicked = false;

    $scope.addItem = function(){
        $scope.addItemClicked = true;
    };

    $scope.cleanAll = function(){};

    $scope.saveList = function(list){
        $scope.contacts.$add(list);
        $scope.contact = {};
    };

})

.controller('savedCtrl', function($scope, Lists) {
    $scope.lists = Lists;
    $scope.listCanSwipe = true;

    $scope.lists = [
        {
            name: "Teste 1",
            date: "",
        },
    ];

    $scope.editList = function(){};

    $scope.delete = function(){};
})

.controller('viewListCtrl', function($scope, Lists) {
    $scope.lists = Lists;
})

.controller('editListCtrl', function($scope, Lists) {
    $scope.lists = Lists;

    $scope.addItem = function(){
        $scope.addItemClicked = true;
    };

    $scope.cleanAll = function(){};

    $scope.saveList = function(){};
})
