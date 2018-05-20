var udacity_retain_ctrl = function ($scope) {

  $scope.model = {
    localStorage: [{ note: [] }],
    init: function () {
      /* neu chay lan dau */
      /* neu undefined thi tao moi */
      if (!utility.checkValue($scope.noteList)) {
        $scope.model.localStorage.notes = [];
      } else {
        $scope.model.localStorage.notes = $scope.noteList;
      }
      /* nguoc lai thi giu nguyen */
      /* neu chay lan sau */
    },
    add: function (obj) {
      if (utility.checkValue(obj.content)) {
        if (utility.checkValue($scope.model.localStorage.notes)) {
          data = $scope.model.localStorage.notes;
          data.push(obj);
          $scope.model.localStorage.notes = data;
        }
      } else {
        obj = {};
      }
    },
    getAllNotes: function () {
      return $scope.model.localStorage.notes;
    }
  };


  $scope.octopus = {
    addNewNote: function (noteStr) {
      $scope.model.add({
        content: noteStr,
        dateSubmitted: new Date(Date.now()).toString()
      });
      $scope.view.render();
    },

    getNotes: function () {
      return $scope.model.getAllNotes();
    },
    init: function () {
      $scope.model.init();
      $scope.view.init();
    }
  };
  $scope.view = {
    init: function () {
      $scope.octopus.addNewNote($scope.newNoteContent);
      $scope.newNoteContent = "";
      $scope.view.render();
    },
    render: function () {
      $scope.noteList = $scope.octopus.getNotes();
    }
  };
  $scope.octopus.init();
};
