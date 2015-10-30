angular.module('shopListApp')

.controller('mainCtrl', function($scope) {})

.controller('newListCtrl', function($scope) {
    $scope.vegetables = [
        'Abóbora',
        'Abobrinha',
        'Agrião',
        'Alecrim',
        'Alface',
        'Alho',
        'Batata',
        'Beringela',
        'Beterraba',
        'Brócolis',
        'Cebola',
        'Cenoura',
        'Chuchu',
        'Coentro',
        'Couve',
        'Couve-flor',
        'Espinafre',
        'Hortelã',
        'Inhame',
        'Louro',
        'Mandioca',
        'Milho',
        'Nabo',
        'Palmito',
        'Pepino',
        'Pimentão',
        'Quiabo',
        'Rabanete',
        'Repolho',
        'Rúcula',
        'Salsinha',
        'Tomate',
        'Vagem'
    ];

    $scope.fruits = [
        'Abacate',
        'Abacaxi',
        'Acerola',
        'Ameixa',
        'Banana',
        'Caju',
        'Coco',
        'Goiaba',
        'Kiwi',
        'Laranja',
        'Limão',
        'Maçã',
        'Mamão',
        'Manga',
        'Maracujá',
        'Melancia',
        'Melão',
        'Morango',
        'Pêra',
        'Pêssego',
        'Tangerina',
        'Uva'
    ];

    $scope.others = [
        'Amêndoas',
        'Amendoim',
        'Arroz',
        'Aveia',
        'Café',
        'Castanha',
        'Cogumelo',
        'Ervas finas',
        'Ervilha',
        'Farinha',
        'Feijão',
        'Mel',
        'Ovo',
        'Pimenta',
        'Sal',
        'Soja',
        'Trigo'
    ];

    $scope.addItem = function(){};

    $scope.cleanAll = function(){};

    $scope.saveList = function(){};

})

.controller('savedCtrl', function($scope) {
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

.controller('viewListCtrl', function($scope) {})

.controller('editListCtrl', function($scope) {
    $scope.addItem = function(){};

    $scope.cleanAll = function(){};

    $scope.saveList = function(){};
})
